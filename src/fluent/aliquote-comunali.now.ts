import { Table, StringColumn, IntegerColumn, DecimalColumn, GenericColumn } from "@servicenow/sdk/core";

export const x_snc_gestione_pat_aliquote_comunali = Table({
  name: "x_snc_gestione_pat_aliquote_comunali",
  label: "Aliquote Comunali",
  accessible_from: "public",
  allow_web_service_access: true,
  audit: true,
  schema: {
    comune: StringColumn({ label: "Comune", maxLength: 100, mandatory: true }),
    codice_catastale_comune: StringColumn({ label: "Codice catastale comune", maxLength: 10 }),
    anno: IntegerColumn({ label: "Anno", mandatory: true }),
    aliquota_imu_base: DecimalColumn({ label: "Aliquota IMU base (‰)" }),
    aliquota_imu_cat_d: DecimalColumn({ label: "Aliquota IMU cat. D (‰)" }),
    aliquota_imu_cat_d_stato: DecimalColumn({ label: "Quota stato cat. D (‰)" }),
    categoria_tari: StringColumn({ label: "Categoria TARI", maxLength: 10 }),
    tariffa_tari_fissa: GenericColumn({ label: "Tariffa TARI fissa (€/m²)", columnType: "currency" }),
    tariffa_tari_variabile: GenericColumn({ label: "Tariffa TARI variabile (€/m²)", columnType: "currency" }),
    quota_provinciale_tari: DecimalColumn({ label: "Quota provinciale TARI (%)" }),
    delibera_riferimento: StringColumn({ label: "Delibera di riferimento", maxLength: 200 }),
    note: StringColumn({ label: "Note", maxLength: 4000 })
  },
  display: "comune"
});
