import { Table, StringColumn, ReferenceColumn, GenericColumn, DecimalColumn, BooleanColumn } from "@servicenow/sdk/core";

export const x_snc_gestione_pat_dettaglio_tari = Table({
  name: "x_snc_gestione_pat_dettaglio_tari",
  label: "Dettaglio TARI",
  accessible_from: "public",
  allow_web_service_access: true,
  audit: true,
  schema: {
    tassa_immobile: ReferenceColumn({ label: "Tassa immobile", mandatory: true, referenceTable: "x_snc_gestione_pat_tasse_immobile" }),
    superficie_tassabile: DecimalColumn({ label: "Superficie tassabile (m²)" }),
    superficie_esclusa: DecimalColumn({ label: "Superficie esclusa (m²)" }),
    categoria_tari: StringColumn({ label: "Categoria TARI", maxLength: 10 }),
    descrizione_categoria: StringColumn({ label: "Descrizione categoria", maxLength: 200 }),
    tariffa_fissa: GenericColumn({ label: "Tariffa fissa (€/m²)", columnType: "currency" }),
    tariffa_variabile: GenericColumn({ label: "Tariffa variabile (€/m²)", columnType: "currency" }),
    quota_provinciale: DecimalColumn({ label: "Quota provinciale (%)" }),
    importo_fisso_calcolato: GenericColumn({ label: "Importo fisso calcolato", columnType: "currency" }),
    importo_variabile_calcolato: GenericColumn({ label: "Importo variabile calcolato", columnType: "currency" }),
    importo_totale_calcolato: GenericColumn({ label: "Importo totale calcolato", columnType: "currency" }),
    comune_competente: StringColumn({ label: "Comune competente", maxLength: 100 }),
    riduzione_applicata: BooleanColumn({ label: "Riduzione applicata", default: false }),
    percentuale_riduzione: DecimalColumn({ label: "Percentuale riduzione (%)" }),
    note: StringColumn({ label: "Note", maxLength: 4000 })
  }
});
