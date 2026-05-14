import { Table, StringColumn, ReferenceColumn, GenericColumn, DecimalColumn } from "@servicenow/sdk/core";

export const x_snc_gestione_pat_dettaglio_imu = Table({
  name: "x_snc_gestione_pat_dettaglio_imu",
  label: "Dettaglio IMU",
  accessible_from: "public",
  allow_web_service_access: true,
  audit: true,
  schema: {
    tassa_immobile: ReferenceColumn({ label: "Tassa immobile", mandatory: true, referenceTable: "x_snc_gestione_pat_tasse_immobile" }),
    rendita_catastale: GenericColumn({ label: "Rendita catastale", columnType: "currency" }),
    coefficiente_rivalutazione: DecimalColumn({ label: "Coefficiente rivalutazione", default: "1.05" }),
    moltiplicatore_categoria: DecimalColumn({ label: "Moltiplicatore categoria" }),
    base_imponibile: GenericColumn({ label: "Base imponibile", columnType: "currency" }),
    aliquota_comunale: DecimalColumn({ label: "Aliquota comunale (‰)" }),
    aliquota_stato: DecimalColumn({ label: "Aliquota stato (‰)" }),
    detrazione: GenericColumn({ label: "Detrazione", columnType: "currency" }),
    importo_calcolato: GenericColumn({ label: "Importo calcolato", columnType: "currency" }),
    comune_competente: StringColumn({ label: "Comune competente", maxLength: 100 }),
    codice_tributo: StringColumn({ label: "Codice tributo F24", maxLength: 10 }),
    note: StringColumn({ label: "Note", maxLength: 4000 })
  }
});
