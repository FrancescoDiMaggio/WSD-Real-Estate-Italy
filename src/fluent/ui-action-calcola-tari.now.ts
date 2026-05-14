import '@servicenow/sdk/global'
import { UiAction } from '@servicenow/sdk/core'

export const calcola_tari_building = UiAction({
    $id: Now.ID['ua-calcola-tari'],
    table: 'sn_wsd_core_building',
    name: 'Calcola TARI',
    actionName: 'x_snc_gestione_pat_calcola_tari',
    active: true,
    hint: 'Calcola la TARI per questo building basandosi sui dati catastali e le aliquote comunali',
    showUpdate: true,
    showInsert: false,
    form: {
        showButton: true,
        style: 'primary',
    },
    list: {
        showButton: false,
    },
    workspace: {
        showFormButtonV2: true,
        showFormMenuButtonV2: true,
        isConfigurableWorkspace: true,
        clientScriptV2: `function onClick(g_form) {

}`,
    },
    script: `(function() {
    var buildingSysId = current.getUniqueValue();
    var annoCorrente = new GlideDateTime().getYearLocalTime();

	


    // STEP 1: Recupera Dati Catastali del building (stato attivo)
    var catGR = new GlideRecord('x_snc_gestione_pat_dati_catastali');
    catGR.addQuery('building', buildingSysId);
    catGR.setLimit(1);
    catGR.query();

	gs.addInfoMessage('sysID ' + buildingSysId + ' anno ' + annoCorrente + " dc " +catGR);

    if (!catGR.next()) {
        gs.addErrorMessage('Calcolo TARI impossibile: nessun record Dati Catastali attivo trovato per questo building.');
        return;
    }
	

    var superficieCatastale = parseFloat(catGR.getValue('superficie_catastale')) || 0;
    var categoriaCatastale = catGR.getValue('categoria_catastale') || '';

    if (superficieCatastale <= 0) {
        gs.addErrorMessage('Calcolo TARI impossibile: la superficie catastale è 0 o non valorizzata.');
        return;
    }

    // STEP 2: Recupera il nome del comune dal building (campo city)
    var cittaBuilding = current.getValue('city') || '';

    if (!cittaBuilding) {
        gs.addErrorMessage('Calcolo TARI impossibile: il campo City del building non è valorizzato.');
        return;
    }

    // STEP 3: Cerca Aliquote Comunali per il comune e anno corrente
    var alqGR = new GlideRecord('x_snc_gestione_pat_aliquote_comunali');
    alqGR.addQuery('comune', cittaBuilding);
    alqGR.setLimit(1);
    alqGR.query();

    if (!alqGR.next()) {
        gs.addErrorMessage('Calcolo TARI impossibile: nessuna aliquota comunale trovata per "' + cittaBuilding + '" anno ' + annoCorrente + '.');
        return;
    }

    var tariffaFissa = parseFloat(alqGR.getValue('tariffa_tari_fissa')) || 0;
    var tariffaVariabile = parseFloat(alqGR.getValue('tariffa_tari_variabile')) || 0;
    var quotaProvinciale = parseFloat(alqGR.getValue('quota_provinciale_tari')) || 0;
    var comuneCompetente = alqGR.getValue('comune') || '';

    // STEP 4: Calcolo TARI
    var importoFisso = superficieCatastale * tariffaFissa;
    var importoVariabile = superficieCatastale * tariffaVariabile;
    var subtotale = importoFisso + importoVariabile;
    var importoQuotaProvinciale = subtotale * (quotaProvinciale / 100);
    var importoTotale = subtotale + importoQuotaProvinciale;

    // STEP 5: Crea record Tasse Immobile (padre)
    var tassaGR = new GlideRecord('x_snc_gestione_pat_tasse_immobile');
    tassaGR.initialize();
    tassaGR.setValue('building', buildingSysId);
    tassaGR.setValue('tipo_tassa', 'tari');
    tassaGR.setValue('anno_fiscale', annoCorrente);
    tassaGR.setValue('periodo_da', annoCorrente + '-01-01');
    tassaGR.setValue('periodo_a', annoCorrente + '-12-31');
    tassaGR.setValue('mesi_competenza', 12);
    tassaGR.setValue('percentuale_possesso', 100);
    tassaGR.setValue('importo_dovuto', importoTotale.toFixed(2));
    tassaGR.setValue('stato', 'calcolato');
    tassaGR.setValue('esenzione', false);
    tassaGR.setValue('note', 'Calcolo automatico TARI - superficie catastale: ' + superficieCatastale + ' m2, comune: ' + comuneCompetente);
    var tassaSysId = tassaGR.insert();

    if (!tassaSysId) {
        gs.addErrorMessage('Errore nella creazione del record Tasse Immobile.');
        return;
    }

    // STEP 6: Crea record Dettaglio TARI (figlio)
    var detGR = new GlideRecord('x_snc_gestione_pat_dettaglio_tari');
    detGR.initialize();
    detGR.setValue('tassa_immobile', tassaSysId);
    detGR.setValue('superficie_tassabile', superficieCatastale);
    detGR.setValue('superficie_esclusa', 0);
    detGR.setValue('categoria_tari', '20');
    detGR.setValue('descrizione_categoria', 'Uffici, agenzie, studi professionali');
    detGR.setValue('tariffa_fissa', tariffaFissa.toFixed(2));
    detGR.setValue('tariffa_variabile', tariffaVariabile.toFixed(2));
    detGR.setValue('quota_provinciale', quotaProvinciale);
    detGR.setValue('importo_fisso_calcolato', importoFisso.toFixed(2));
    detGR.setValue('importo_variabile_calcolato', importoVariabile.toFixed(2));
    detGR.setValue('importo_totale_calcolato', importoTotale.toFixed(2));
    detGR.setValue('comune_competente', comuneCompetente);
    detGR.setValue('riduzione_applicata', false);
    detGR.setValue('percentuale_riduzione', 0);
    detGR.setValue('note', 'Cat. catastale: ' + categoriaCatastale + ' | Tariffa fissa: ' + tariffaFissa + ' EUR/m2 | Tariffa variabile: ' + tariffaVariabile + ' EUR/m2 | Quota prov.: ' + quotaProvinciale + '%');
    var detSysId = detGR.insert();

    if (!detSysId) {
        gs.addErrorMessage('Record Tasse Immobile creato, ma errore nella creazione del Dettaglio TARI.');
        return;
    }

    // STEP 7: Messaggio di conferma
    gs.addInfoMessage('TARI ' + annoCorrente + ' calcolata con successo! Superficie: ' + superficieCatastale + ' m2, Totale dovuto: EUR ' + importoTotale.toFixed(2));

})();
`,
    messages: [],
})
