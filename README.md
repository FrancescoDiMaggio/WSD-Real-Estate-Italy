# Gestione Patrimonio Immobiliare

**Scope**: `x_snc_gestione_pat`  
**Cliente**: azienda energy generica S.p.A.  
**Piattaforma**: ServiceNow (estensione Workplace Management)

---

## 📋 Panoramica

Applicazione ServiceNow per la gestione del patrimonio immobiliare di azienda energy generica, focalizzata su:
- **Dati catastali italiani** (Foglio, Particella, Subalterno, Categoria, Rendita)
- **Gestione imposte immobiliari** (IMU, TARI) con storicizzazione annuale
- **Tracciamento occupazione** nel tempo (per calcolo pro-rata)
- **Pratiche immobiliari** burocratiche (variazioni catastali, volture, DOCFA, ecc.)

L'applicazione estende il modulo **Workplace Management** di ServiceNow, usando la tabella `sn_wsd_core_building` come entità principale di riferimento.

---

## 🏢 Contesto Cliente

azienda energy generica è una delle principali multiutility italiane. Il patrimonio immobiliare include:

| Tipologia | Esempi |
|-----------|--------|
| Centrali elettriche | Termoelettriche, idroelettriche, a ciclo combinato |
| Cabine e sottostazioni | Cabine primarie, secondarie, di trasformazione |
| Torri e antenne | Tralicci, torri telecomunicazione |
| Impianti distribuzione | Stazioni di smistamento, nodi di rete |
| Uffici | Sedi direzionali, uffici territoriali |
| Magazzini | Depositi materiali, officine |
| Foresterie | Alloggi per personale operativo |

**Caratteristiche chiave**:
- Immobili **non domestici** (commerciali/industriali)
- Presenza su **tutto il territorio italiano** (multi-comune)
- **Occupazione parziale** frequente (più BU nello stesso building)
- Necessità di **storicizzazione** (variazioni infra-annuali)

---

## 📊 Architettura Dati

### Modello Relazionale

```
┌─────────────────────────────┐
│   sn_wsd_core_building      │  (Tabella platform - NON modificata)
│   (Workplace Management)     │
└──────────────┬──────────────┘
               │ 1:N
    ┌──────────┼──────────────────────────────────┐
    │          │                                   │
    ▼          ▼                                   ▼
┌────────┐ ┌──────────────┐               ┌──────────────────┐
│ DATI   │ │    DATI      │               │    PRATICHE      │
│CATAST. │ │ IMMOBILIARI  │               │  IMMOBILIARI     │
└───┬────┘ └──────────────┘               └──────────────────┘
    │
    │ (rendita usata per calcolo)
    ▼
┌──────────────────────┐
│   TASSE_IMMOBILE     │  (Record tassa per building/anno/periodo)
│   tipo: IMU | TARI   │
└──────────┬───────────┘
           │ 1:1 (in base al tipo)
     ┌─────┴─────┐
     ▼           ▼
┌─────────┐ ┌─────────┐
│DETTAGLIO│ │DETTAGLIO│
│   IMU   │ │  TARI   │
└─────────┘ └─────────┘

┌──────────────────────┐
│  ALIQUOTE_COMUNALI   │  (Tabella di lookup - tariffe per comune/anno)
└──────────────────────┘
```

### Scelta architetturale: Disaccoppiamento Tasse

Invece di una singola tabella monolitica per lo storico imposte, il modello utilizza:

1. **TASSE_IMMOBILE** — Tabella "padre" che registra ogni obbligo fiscale per un building in un determinato periodo. Contiene i campi comuni (building, anno fiscale, periodo, stato, importo totale).

2. **DETTAGLIO_IMU** — Tabella figlio con i campi specifici per il calcolo IMU (rendita, coefficiente, moltiplicatore, aliquota, base imponibile).

3. **DETTAGLIO_TARI** — Tabella figlio con i campi specifici per il calcolo TARI (superficie tassabile, categoria, tariffa fissa/variabile).

**Vantaggi**:
- Estensibilità: aggiungere nuove tasse (es. TASI, TOSAP, canone unico) richiede solo una nuova tabella di dettaglio
- Separazione delle responsabilità: logiche di calcolo IMU e TARI indipendenti
- Query mirate: non si caricano campi inutili quando si lavora su una sola imposta

---

## 📦 Tabelle Applicazione

### 1. Dati Catastali (`x_snc_gestione_pat_dati_catastali`)

Identifica univocamente l'immobile nel Catasto italiano.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| building | Reference → sn_wsd_core_building | Edificio di riferimento |
| comune_catastale | String | Codice comune catastale (es. "F205" per Milano) |
| sezione | String | Sezione urbana (se applicabile) |
| foglio | String | Numero foglio di mappa |
| particella | String | Numero particella/mappale |
| subalterno | String | Numero subalterno |
| categoria_catastale | Choice | Categoria (D/1, D/7, D/8, A/10, C/2, E/3, ecc.) |
| classe | String | Classe catastale |
| rendita_catastale | Currency | Rendita catastale in € |
| consistenza | Decimal | Consistenza (m² o vani a seconda della categoria) |
| superficie_catastale | Decimal | Superficie catastale in m² |
| zona_censuaria | String | Zona censuaria |
| data_accatastamento | Date | Data di registrazione al catasto |
| stato | Choice | Attivo / Storico / In aggiornamento |
| note | String (multiline) | Note libere |

**Note**: Un building può avere **più record catastali** (più subalterni, o storicizzazione dopo variazioni).

**Categorie catastali rilevanti per azienda energy generica**:
- `D/1` — Opifici (centrali elettriche, impianti produzione)
- `D/7` — Fabbricati per attività industriali (cabine, impianti distribuzione)
- `D/8` — Fabbricati per attività commerciali
- `A/10` — Uffici/studi privati
- `C/2` — Magazzini e locali di deposito
- `E/3` — Costruzioni per esigenze pubbliche (torri, antenne, tralicci)

---

### 2. Dati Immobiliari (`x_snc_gestione_pat_dati_immobiliari`)

Snapshot occupazionale e caratteristiche dell'immobile in un dato periodo.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| building | Reference → sn_wsd_core_building | Edificio di riferimento |
| tipologia_immobile | Choice | Centrale, Cabina, Torre, Ufficio, Magazzino, Foresteria, ecc. |
| destinazione_uso | Choice | Industriale / Commerciale / Direzionale / Misto |
| titolo_possesso | Choice | Proprietà / Locazione / Comodato / Concessione / Diritto di superficie |
| superficie_totale | Decimal | Superficie totale dell'immobile (m²) |
| superficie_occupata | Decimal | Superficie occupata da azienda energy generica (m²) |
| percentuale_occupazione | Decimal | Percentuale di occupazione (0-100%) |
| anno_riferimento | Integer | Anno fiscale di riferimento |
| data_inizio_occupazione | Date | Inizio periodo di occupazione |
| data_fine_occupazione | Date | Fine periodo di occupazione |
| stato_immobile | Choice | In uso / Dismesso / In ristrutturazione / In costruzione / Ceduto |
| codice_interno | String | Codice identificativo interno azienda energy generica |
| business_unit | Reference → cmn_department | Divisione azienda energy generica che utilizza l'immobile |
| proprietario | Reference → core_company | Società proprietaria |
| note | String (multiline) | Note libere |

---

### 3. Tasse Immobile (`x_snc_gestione_pat_tasse_immobile`)

Record padre per ogni obbligo fiscale immobiliare. Contiene dati comuni a tutte le imposte.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| building | Reference → sn_wsd_core_building | Edificio di riferimento |
| tipo_tassa | Choice | IMU / TARI / (future: TASI, TOSAP, Canone unico) |
| anno_fiscale | Integer | Anno fiscale di competenza |
| periodo_da | Date | Inizio periodo di competenza |
| periodo_a | Date | Fine periodo di competenza |
| mesi_competenza | Integer | Mesi di competenza nel periodo (1-12) |
| percentuale_possesso | Decimal | Percentuale di possesso/occupazione |
| importo_dovuto | Currency | Importo totale della tassa dovuta |
| importo_versato | Currency | Importo effettivamente versato |
| data_versamento | Date | Data di pagamento |
| esenzione | Boolean | Flag esenzione applicabile |
| motivo_esenzione | String | Motivazione esenzione (es. cat. E, immobile strumentale) |
| stato | Choice | Calcolato / Verificato / Pagato / Parzialmente pagato / Contestato |
| note | String (multiline) | Note libere |

---

### 4. Dettaglio IMU (`x_snc_gestione_pat_dettaglio_imu`)

Campi specifici per il calcolo dell'Imposta Municipale Unica.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| tassa_immobile | Reference → x_snc_gestione_pat_tasse_immobile | Record tassa padre |
| rendita_catastale | Currency | Rendita catastale di riferimento (€) |
| coefficiente_rivalutazione | Decimal | Coefficiente rivalutazione (tipicamente 1.05 = +5%) |
| moltiplicatore_categoria | Decimal | Moltiplicatore per categoria (es. 65 per cat. D) |
| base_imponibile | Currency | Base imponibile = Rendita × Coeff × Moltiplicatore |
| aliquota_comunale | Decimal | Aliquota IMU del comune (‰) |
| aliquota_stato | Decimal | Quota statale (solo per cat. D: 0.76%) |
| detrazione | Currency | Eventuali detrazioni applicabili |
| importo_calcolato | Currency | IMU calcolata |
| comune_competente | String | Comune a cui versare |
| codice_tributo | String | Codice tributo F24 |
| note | String (multiline) | Note calcolo |

**Formula IMU**: `Rendita × 1.05 × Moltiplicatore × Aliquota × (Mesi/12) × (%Possesso/100)`

**Moltiplicatori principali**:
- Cat. D (industriale): **65**
- Cat. A/10 (uffici): **80**
- Cat. C/2 (magazzini): **160**
- Cat. E (esente IMU dal 2014)

---

### 5. Dettaglio TARI (`x_snc_gestione_pat_dettaglio_tari`)

Campi specifici per il calcolo della Tassa sui Rifiuti.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| tassa_immobile | Reference → x_snc_gestione_pat_tasse_immobile | Record tassa padre |
| superficie_tassabile | Decimal | Superficie soggetta a TARI (m²) |
| superficie_esclusa | Decimal | Superficie esclusa (es. aree produzione rifiuti speciali) |
| categoria_tari | Choice | Categoria di attività non domestica (1-30) |
| descrizione_categoria | String | Descrizione della categoria TARI |
| tariffa_fissa | Currency | Componente fissa della tariffa (€/m²) |
| tariffa_variabile | Currency | Componente variabile della tariffa (€/m²) |
| quota_provinciale | Decimal | Addizionale provinciale (tipicamente 5%) |
| importo_fisso_calcolato | Currency | Superficie × Tariffa fissa |
| importo_variabile_calcolato | Currency | Superficie × Tariffa variabile |
| importo_totale_calcolato | Currency | Fisso + Variabile + quota provinciale |
| comune_competente | String | Comune a cui versare |
| riduzione_applicata | Boolean | Se è stata applicata una riduzione |
| percentuale_riduzione | Decimal | Percentuale di riduzione (es. per raccolta differenziata) |
| note | String (multiline) | Note calcolo |

**Formula TARI**: `(Superficie × Tariffa_fissa) + (Superficie × Tariffa_variabile) + Addizionale_provinciale`

**Categorie TARI non domestiche rilevanti**:
- Cat. 12: Attività artigianali tipo produttive (cabine)
- Cat. 20: Uffici, agenzie
- Cat. 21: Banche e istituti di credito
- Cat. 3: Autorimesse/magazzini senza vendita

---

### 6. Pratiche Immobiliari (`x_snc_gestione_pat_pratiche_immobiliari`)

Tracciamento di tutte le procedure amministrative legate agli immobili.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| building | Reference → sn_wsd_core_building | Edificio di riferimento |
| numero_pratica | String (auto) | Numero progressivo pratica |
| tipo_pratica | Choice | Tipo di procedura (vedi sotto) |
| stato_pratica | Choice | Aperta / In lavorazione / In attesa / Completata / Rigettata |
| priorita | Choice | Alta / Media / Bassa |
| data_apertura | Date | Data di apertura pratica |
| data_scadenza | Date | Deadline/scadenza |
| data_chiusura | Date | Data di chiusura effettiva |
| ente_destinatario | Choice | Agenzia Entrate / Comune / Catasto / Altro |
| professionista | String | Studio/professionista incaricato |
| descrizione | String (multiline) | Descrizione dettagliata |
| importo_spesa | Currency | Costo della pratica |
| assegnato_a | Reference → sys_user | Referente interno |
| note | String (multiline) | Note aggiuntive |

**Tipi di pratica**:
- Accatastamento nuovo
- Variazione catastale (DOCFA)
- Voltura catastale
- Frazionamento/Fusione
- Dichiarazione TARI
- Richiesta esenzione IMU/TARI
- Ricorso tributario
- Istanza di autotutela
- Verifica rendita

---

### 7. Aliquote Comunali (`x_snc_gestione_pat_aliquote_comunali`)

Tabella di lookup con le tariffe fiscali per comune e anno.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| comune | String | Nome del comune |
| codice_catastale_comune | String | Codice catastale (es. F205 = Milano) |
| anno | Integer | Anno di validità |
| aliquota_imu_base | Decimal | Aliquota IMU base (‰) |
| aliquota_imu_cat_d | Decimal | Aliquota IMU per categoria D (‰) |
| aliquota_imu_cat_d_stato | Decimal | Quota stato cat. D (‰) — fissa 0.76% |
| categoria_tari | Choice | Categoria non domestica |
| tariffa_tari_fissa | Currency | Tariffa TARI fissa per categoria (€/m²) |
| tariffa_tari_variabile | Currency | Tariffa TARI variabile per categoria (€/m²) |
| quota_provinciale_tari | Decimal | Addizionale provinciale TARI (%) |
| delibera_riferimento | String | Riferimento delibera comunale |
| note | String (multiline) | Note |

---

## 🔑 Considerazioni Tecniche

### Esenzioni e casi particolari

| Casistica | Impatto |
|-----------|---------|
| Categoria E (torri, antenne) | Esenti IMU dal 2014 |
| Immobili "imbullonati" (D/1) | Macchinari esclusi dalla rendita dal 2016 |
| Concessioni demaniali | Regime speciale IMU |
| Aree produttive rifiuti speciali | Superficie esclusa da TARI |
| Occupazione parziale | Pro-rata sia IMU che TARI |
| Variazione infra-annuale | Calcolo per mesi effettivi |

### Storicizzazione

- I **Dati Catastali** hanno campo `stato` per distinguere record attivi da storici
- I **Dati Immobiliari** hanno date inizio/fine per tracciare variazioni di occupazione
- Le **Tasse Immobile** sono per natura storicizzate (un record per anno/periodo)
- Le **Aliquote Comunali** sono per anno, così si mantiene lo storico tariffario

### Relazione con sn_wsd_core_building

Tutte le tabelle principali hanno un campo **reference** verso `sn_wsd_core_building`. Non modifichiamo la tabella platform, ma la estendiamo logicamente con le nostre tabelle custom nello scope `x_snc_gestione_pat`.

---

## 🚀 Roadmap

### Fase 1 — Scaffolding (ATTUALE)
- [x] Creazione applicazione e scope
- [x] Documentazione architettura
- [ ] Creazione tabelle base
- [ ] Build & Install

### Fase 2 — Logica di calcolo
- [ ] Business Rules per calcolo automatico IMU
- [ ] Business Rules per calcolo automatico TARI
- [ ] Validazioni dati catastali

### Fase 3 — Import e integrazione
- [ ] Import dati catastali da CSV/Excel
- [ ] Import aliquote comunali
- [ ] Integrazione con sistemi azienda energy generica

### Fase 4 — Reporting e UI
- [ ] Dashboard patrimonio immobiliare
- [ ] Report scadenze pratiche
- [ ] Viste aggregate per comune/anno

---

## 📁 Struttura Progetto

```
/
├── README.md                          # Questa documentazione
├── now.config.json                    # Configurazione ServiceNow
├── package.json                       # Dipendenze
└── src/
    ├── server/
    │   └── tsconfig.json
    └── fluent/
        ├── dati-catastali.now.ts      # Tabella dati catastali
        ├── dati-immobiliari.now.ts    # Tabella dati immobiliari
        ├── tasse-immobile.now.ts      # Tabella tasse immobile (padre)
        ├── dettaglio-imu.now.ts       # Tabella dettaglio IMU
        ├── dettaglio-tari.now.ts      # Tabella dettaglio TARI
        ├── pratiche-immobiliari.now.ts # Tabella pratiche immobiliari
        └── aliquote-comunali.now.ts   # Tabella aliquote comunali
```

---

## 📝 Changelog

| Data | Versione | Descrizione |
|------|----------|-------------|
| 2025-01-XX | 0.1.0 | Scaffolding iniziale, documentazione, creazione tabelle |
