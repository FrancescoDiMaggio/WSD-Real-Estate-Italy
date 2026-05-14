import { Table, StringColumn, ReferenceColumn, ChoiceColumn, DateColumn, GenericColumn } from "@servicenow/sdk/core";

export const x_snc_gestione_pat_pratiche_immobiliari = Table({
  name: "x_snc_gestione_pat_pratiche_immobiliari",
  label: "Pratiche Immobiliari",
  accessible_from: "public",
  allow_web_service_access: true,
  audit: true,
  auto_number: {
    prefix: "PRA",
    number: 1000,
    number_of_digits: 7
  },
  schema: {
    number: StringColumn({ label: "Number", read_only: true, default: "javascript:global.getNextObjNumberPadded();" }),
    building: ReferenceColumn({ label: "Edificio", mandatory: true, referenceTable: "sn_wsd_core_building" }),
    numero_pratica: StringColumn({ label: "Numero pratica", maxLength: 40, read_only: true, default: "javascript:global.getNextObjNumberPadded();" }),
    tipo_pratica: ChoiceColumn({
      label: "Tipo pratica",
      mandatory: true,
      dropdown: "dropdown_without_none",
      choices: {
        accatastamento: { label: "Accatastamento nuovo", sequence: 0 },
        variazione_docfa: { label: "Variazione catastale (DOCFA)", sequence: 1 },
        voltura: { label: "Voltura catastale", sequence: 2 },
        frazionamento: { label: "Frazionamento/Fusione", sequence: 3 },
        dichiarazione_tari: { label: "Dichiarazione TARI", sequence: 4 },
        richiesta_esenzione: { label: "Richiesta esenzione", sequence: 5 },
        ricorso_tributario: { label: "Ricorso tributario", sequence: 6 },
        autotutela: { label: "Istanza di autotutela", sequence: 7 },
        verifica_rendita: { label: "Verifica rendita", sequence: 8 }
      }
    }),
    stato_pratica: ChoiceColumn({
      label: "Stato pratica",
      dropdown: "dropdown_without_none",
      default: "aperta",
      choices: {
        aperta: { label: "Aperta", sequence: 0 },
        in_lavorazione: { label: "In lavorazione", sequence: 1 },
        in_attesa: { label: "In attesa risposta", sequence: 2 },
        completata: { label: "Completata", sequence: 3 },
        rigettata: { label: "Rigettata", sequence: 4 }
      }
    }),
    priorita: ChoiceColumn({
      label: "Priorità",
      dropdown: "dropdown_with_none",
      choices: {
        alta: { label: "Alta", sequence: 0 },
        media: { label: "Media", sequence: 1 },
        bassa: { label: "Bassa", sequence: 2 }
      }
    }),
    data_apertura: DateColumn({ label: "Data apertura" }),
    data_scadenza: DateColumn({ label: "Data scadenza" }),
    data_chiusura: DateColumn({ label: "Data chiusura" }),
    ente_destinatario: ChoiceColumn({
      label: "Ente destinatario",
      dropdown: "dropdown_with_none",
      choices: {
        agenzia_entrate: { label: "Agenzia delle Entrate", sequence: 0 },
        comune: { label: "Comune", sequence: 1 },
        catasto: { label: "Catasto", sequence: 2 },
        altro: { label: "Altro", sequence: 3 }
      }
    }),
    professionista: StringColumn({ label: "Professionista/Studio", maxLength: 200 }),
    descrizione: StringColumn({ label: "Descrizione", maxLength: 4000 }),
    importo_spesa: GenericColumn({ label: "Importo spesa", columnType: "currency" }),
    assegnato_a: ReferenceColumn({ label: "Assegnato a", referenceTable: "sys_user" }),
    note: StringColumn({ label: "Note", maxLength: 4000 })
  },
  display: "numero_pratica"
});
