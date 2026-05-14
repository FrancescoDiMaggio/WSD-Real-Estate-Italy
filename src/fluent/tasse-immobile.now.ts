import { Table, StringColumn, ReferenceColumn, ChoiceColumn, IntegerColumn, DateColumn, DecimalColumn, GenericColumn, BooleanColumn } from "@servicenow/sdk/core";

export const x_snc_gestione_pat_tasse_immobile = Table({
  name: "x_snc_gestione_pat_tasse_immobile",
  label: "Tasse Immobile",
  accessible_from: "public",
  allow_web_service_access: true,
  audit: true,
  extensible: true,
  auto_number: {
    prefix: "TAX",
    number: 1000,
    number_of_digits: 7
  },
  schema: {
    number: StringColumn({ label: "Number", read_only: true, default: "javascript:global.getNextObjNumberPadded();" }),
    building: ReferenceColumn({ label: "Edificio", mandatory: true, referenceTable: "sn_wsd_core_building" }),
    tipo_tassa: ChoiceColumn({
      label: "Tipo tassa",
      mandatory: true,
      dropdown: "dropdown_without_none",
      choices: {
        imu: { label: "IMU", sequence: 0 },
        tari: { label: "TARI", sequence: 1 }
      }
    }),
    anno_fiscale: IntegerColumn({ label: "Anno fiscale", mandatory: true }),
    periodo_da: DateColumn({ label: "Periodo da" }),
    periodo_a: DateColumn({ label: "Periodo a" }),
    mesi_competenza: IntegerColumn({ label: "Mesi di competenza", default: "12" }),
    percentuale_possesso: DecimalColumn({ label: "Percentuale possesso (%)" }),
    importo_dovuto: GenericColumn({ label: "Importo dovuto", columnType: "currency" }),
    importo_versato: GenericColumn({ label: "Importo versato", columnType: "currency" }),
    data_versamento: DateColumn({ label: "Data versamento" }),
    esenzione: BooleanColumn({ label: "Esenzione", default: false }),
    motivo_esenzione: StringColumn({ label: "Motivo esenzione", maxLength: 200 }),
    stato: ChoiceColumn({
      label: "Stato",
      dropdown: "dropdown_without_none",
      default: "calcolato",
      choices: {
        calcolato: { label: "Calcolato", sequence: 0 },
        verificato: { label: "Verificato", sequence: 1 },
        pagato: { label: "Pagato", sequence: 2 },
        parzialmente_pagato: { label: "Parzialmente pagato", sequence: 3 },
        contestato: { label: "Contestato", sequence: 4 }
      }
    }),
    note: StringColumn({ label: "Note", maxLength: 4000 })
  },
  display: "tipo_tassa"
});
