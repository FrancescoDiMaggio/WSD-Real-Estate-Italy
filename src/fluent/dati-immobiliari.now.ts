import { Table, StringColumn, ReferenceColumn, ChoiceColumn, DecimalColumn, IntegerColumn, DateColumn } from "@servicenow/sdk/core";

export const x_snc_gestione_pat_dati_immobiliari = Table({
  name: "x_snc_gestione_pat_dati_immobiliari",
  label: "Dati Immobiliari",
  accessible_from: "public",
  allow_web_service_access: true,
  audit: true,
  auto_number: {
    prefix: "IMM",
    number: 1000,
    number_of_digits: 7
  },
  schema: {
    number: StringColumn({ label: "Number", read_only: true, default: "javascript:global.getNextObjNumberPadded();" }),
    building: ReferenceColumn({ label: "Edificio", mandatory: true, referenceTable: "sn_wsd_core_building" }),
    tipologia_immobile: ChoiceColumn({
      label: "Tipologia immobile",
      dropdown: "dropdown_with_none",
      choices: {
        centrale_elettrica: { label: "Centrale elettrica", sequence: 0 },
        cabina_primaria: { label: "Cabina primaria", sequence: 1 },
        cabina_secondaria: { label: "Cabina secondaria", sequence: 2 },
        torre_antenna: { label: "Torre/Antenna", sequence: 3 },
        stazione_smistamento: { label: "Stazione smistamento", sequence: 4 },
        ufficio: { label: "Ufficio", sequence: 5 },
        magazzino: { label: "Magazzino", sequence: 6 },
        foresteria: { label: "Foresteria", sequence: 7 },
        altro: { label: "Altro", sequence: 8 }
      }
    }),
    destinazione_uso: ChoiceColumn({
      label: "Destinazione d'uso",
      dropdown: "dropdown_with_none",
      choices: {
        industriale: { label: "Industriale", sequence: 0 },
        commerciale: { label: "Commerciale", sequence: 1 },
        direzionale: { label: "Direzionale", sequence: 2 },
        misto: { label: "Misto", sequence: 3 }
      }
    }),
    titolo_possesso: ChoiceColumn({
      label: "Titolo di possesso",
      dropdown: "dropdown_with_none",
      choices: {
        proprieta: { label: "Proprietà", sequence: 0 },
        locazione: { label: "Locazione", sequence: 1 },
        comodato: { label: "Comodato d'uso", sequence: 2 },
        concessione: { label: "Concessione demaniale", sequence: 3 },
        diritto_superficie: { label: "Diritto di superficie", sequence: 4 }
      }
    }),
    superficie_totale: DecimalColumn({ label: "Superficie totale (m²)" }),
    superficie_occupata: DecimalColumn({ label: "Superficie occupata (m²)" }),
    percentuale_occupazione: DecimalColumn({ label: "Percentuale occupazione (%)" }),
    anno_riferimento: IntegerColumn({ label: "Anno di riferimento" }),
    data_inizio_occupazione: DateColumn({ label: "Data inizio occupazione" }),
    data_fine_occupazione: DateColumn({ label: "Data fine occupazione" }),
    stato_immobile: ChoiceColumn({
      label: "Stato immobile",
      dropdown: "dropdown_without_none",
      default: "in_uso",
      choices: {
        in_uso: { label: "In uso", sequence: 0 },
        dismesso: { label: "Dismesso", sequence: 1 },
        in_ristrutturazione: { label: "In ristrutturazione", sequence: 2 },
        in_costruzione: { label: "In costruzione", sequence: 3 },
        ceduto: { label: "Ceduto", sequence: 4 }
      }
    }),
    codice_interno: StringColumn({ label: "Codice interno", maxLength: 40 }),
    business_unit: ReferenceColumn({ label: "Business unit", referenceTable: "cmn_department" }),
    proprietario: ReferenceColumn({ label: "Proprietario", referenceTable: "core_company" }),
    note: StringColumn({ label: "Note", maxLength: 4000 })
  },
  display: "codice_interno"
});
