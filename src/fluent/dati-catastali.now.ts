import { Table, StringColumn, ReferenceColumn, ChoiceColumn, GenericColumn, DecimalColumn, DateColumn } from "@servicenow/sdk/core";

export const x_snc_gestione_pat_dati_catastali = Table({
  name: "x_snc_gestione_pat_dati_catastali",
  label: "Dati Catastali",
  accessible_from: "public",
  allow_web_service_access: true,
  audit: true,
  auto_number: {
    prefix: "CAT",
    number: 1000,
    number_of_digits: 7
  },
  schema: {
    number: StringColumn({ label: "Number", read_only: true, default: "javascript:global.getNextObjNumberPadded();" }),
    building: ReferenceColumn({ label: "Edificio", mandatory: true, referenceTable: "sn_wsd_core_building" }),
    comune_catastale: StringColumn({ label: "Comune catastale", maxLength: 100 }),
    sezione: StringColumn({ label: "Sezione urbana", maxLength: 10 }),
    foglio: StringColumn({ label: "Foglio", maxLength: 10, mandatory: true }),
    particella: StringColumn({ label: "Particella", maxLength: 10, mandatory: true }),
    subalterno: StringColumn({ label: "Subalterno", maxLength: 10 }),
    categoria_catastale: ChoiceColumn({
      label: "Categoria catastale",
      dropdown: "dropdown_with_none",
      choices: {
        d_1: { label: "D/1 - Opifici", sequence: 0 },
        d_7: { label: "D/7 - Fabbricati industriali", sequence: 1 },
        d_8: { label: "D/8 - Fabbricati commerciali", sequence: 2 },
        a_10: { label: "A/10 - Uffici", sequence: 3 },
        c_2: { label: "C/2 - Magazzini", sequence: 4 },
        e_3: { label: "E/3 - Costruzioni esigenze pubbliche", sequence: 5 },
        altro: { label: "Altro", sequence: 6 }
      }
    }),
    classe: StringColumn({ label: "Classe", maxLength: 10 }),
    rendita_catastale: GenericColumn({ label: "Rendita catastale", columnType: "currency" }),
    consistenza: DecimalColumn({ label: "Consistenza" }),
    superficie_catastale: DecimalColumn({ label: "Superficie catastale (m²)" }),
    zona_censuaria: StringColumn({ label: "Zona censuaria", maxLength: 40 }),
    data_accatastamento: DateColumn({ label: "Data accatastamento" }),
    stato: ChoiceColumn({
      label: "Stato",
      dropdown: "dropdown_without_none",
      default: "attivo",
      choices: {
        attivo: { label: "Attivo", sequence: 0 },
        storico: { label: "Storico", sequence: 1 },
        in_aggiornamento: { label: "In aggiornamento", sequence: 2 }
      }
    }),
    note: StringColumn({ label: "Note", maxLength: 4000 })
  },
  display: "particella"
});
