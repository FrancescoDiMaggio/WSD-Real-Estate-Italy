import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '138e8b1110d24da19ed9883ebd8ffe1a'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '1d7666273cb14ece949c3307b27540a7'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '0022cca20fc64c5a81df39bafab1c279'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'note'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0043231be03345dd8ce8b5a730456316'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'superficie_totale'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '007cc3a1a08542b4a6759e32ddad2096'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'stato_pratica'
                            value: 'rigettata'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '008d732c10a543a7b0028e2b0e690a1b'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '009d64e7b5084794bab84aadeba07504'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'data_fine_occupazione'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '00ddd5fb3ac5454e8d1b617eea81df05'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'stato'
                            value: 'storico'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '012a9d11e641451b920795101795b6fc'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'tariffa_tari_fissa'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0316c03ae2744cdb897eefe2c4a8d145'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'periodo_a'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '03f21fd46c534f779ac34bb0b9c6e4a6'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'categoria_tari'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '03fad948a30444adb81cbe7d5cbb227b'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'stato_pratica'
                            value: 'in_attesa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '044c5707d974422bac3d5d550c904156'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'categoria_catastale'
                            value: 'd_1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '04a6f0906deb468a92e78fa4720203c5'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'periodo_da'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0526a7894a384562a89f1ce82864d98b'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'aliquota_stato'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '056ed94c877f4866b289352146e056b8'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'rendita_catastale'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07b29002a2804d32b64b0345aca89d3e'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'stato'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '085d779fa3e24f6ca91daef885df041d'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'comune_competente'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '09b6d0855e4347ce98c8de0517312bef'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a567a512a05451c99e45513482d513c'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'comune_catastale'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0c4f37b56f434db9a5ca770585fb5389'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'percentuale_occupazione'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0dab14755f464832bf692a31fedfabdc'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'ente_destinatario'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0fae0a85d4ba4161b5e01869ff273d2c'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'proprietario'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '10604d7bae2d4d7fbe261d10336b4e69'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'importo_variabile_calcolato'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '10da7f04c40d4187a33ce8651dd5f40a'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'note'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1169c76aca504d289afdbd95da03740a'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'building'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '118a6fcc155846b6ac4f4d8a70c14f23'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '11a36bb0b88c4a86969ff67153e629f3'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'categoria_catastale'
                            value: 'e_3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '125aa76c00b14358884cb3e181ddc4c6'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '138968ee091741adbd8f60574a05350c'
                        key: {
                            category: 'x_snc_gestione_pat_pratiche_immobiliari'
                            prefix: 'PRA'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '143c4a66ac0847d8afa58d3516a8f462'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '15a6a7216bbf4e3095079cf400e09399'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'aliquota_imu_base'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '16d4fd281bde4333bd3dd8d7a62ebc53'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'stato'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '17bcb5186a1c4585ba85f7358147f8be'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'tariffa_fissa'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '17dcbf11ef3d44f98933abff96032e87'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'data_scadenza'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '185bdd70ca8c468bb4de3b859ed2d9d6'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'destinazione_uso'
                            value: 'misto'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '18a87e3905d04ccb9e0551f525a09ebf'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'stato'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1930b30f50384af5a59e07f9f3a14911'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'note'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19930fee00304e80af8a0bebb7261633'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'note'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1a56af2714a3416baeadf27b33f46302'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'priorita'
                            value: 'bassa'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1abaf32d309c423db6b21e13b6e47312'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b4c3e57fba74d58b2baf8d241aca09e'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'moltiplicatore_categoria'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1b6a4c791a33444a8eff44e063cd3e0d'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'tipologia_immobile'
                            value: 'torre_antenna'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c31215ac9624c2fa65fe5aca476f2bb'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c87eb3c21314c44bd65f83427f97ee3'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'tipo_pratica'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2164f145a1334900ad9ecfa35c087c18'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'tipo_pratica'
                            value: 'voltura'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '21e15d6aade74fa3ab97b5d57291e4fa'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2208aac487024db3a7440916bf3a2145'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'consistenza'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2457b1700ba24357933832d22c2f73bf'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'titolo_possesso'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '24bf141f28a1406f8f719df852bb8a6b'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'importo_fisso_calcolato'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '253ea1018d6a4068981a4e80fb662751'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '25a6132d97d0442b81edac96b2511068'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'tipologia_immobile'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '25bf686e3e8a417085a7f3f22bc33aed'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'codice_tributo'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '26bc1ae78b984cbab9818e70002a423b'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'destinazione_uso'
                            value: 'direzionale'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2703639d434f4abeb47fcc53700b0261'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'tipo_pratica'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '272ec16a54054b65b1d302e1dbf4142c'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'foglio'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '28509184a4a84032847c2dead52bfa9e'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '28846db9a4384765bac6fd4c7c1a63e9'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'note'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2a7bbe4da6a74e22863c05cf9c877278'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'comune_catastale'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c96207226d64712acfe582ee0d71025'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'consistenza'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2cd0b4f3f31a44098e073d44cd250afd'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'anno'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ebecd01ae014bd9ba9de0d6e5e1d7de'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'sezione'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2f763a569a284228873851a96d6fd604'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'tipologia_immobile'
                            value: 'magazzino'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '30557ccd44c24693a6081bda4361eb12'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'importo_spesa'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '308268c3e1484f558e9192ad03ed0d90'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'stato_immobile'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '30a87b56ed5247efa65cd86903638af5'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'building'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3132a82de91f47a59a0fa8fc33566fd8'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'ente_destinatario'
                            value: 'agenzia_entrate'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '32953bc1ef5c47ef9043293d1c11d535'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'tariffa_variabile'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '329ea0f5066342b48cfad997d9ee607e'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'building'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '32c99e716b1c407eb988614890b4e295'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'ente_destinatario'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3323d6529d1e42f681143ce5aaabc5fe'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'tassa_immobile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3442ac446b6845a5bc0508ee0cfa6a66'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'titolo_possesso'
                            value: 'locazione'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3475199abeec41d7a82cc9432ccdc613'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'codice_catastale_comune'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3492a1b7a283409e8338f26744779cab'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'esenzione'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '34ba462427ed4d579d36eda6711fc21e'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'tipo_pratica'
                            value: 'autotutela'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34d95e10476d4da286b310cec3defd5b'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35e5ce33d03849c0a0fcf7e3f8e9cc2d'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'importo_variabile_calcolato'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '361e278d9e8748f2be2dd78870462347'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'aliquota_imu_base'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '368ec68f8e8542a6ab5fb6df57579472'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'priorita'
                            value: 'alta'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '373882e6b4e24b03809acbab2993f9dd'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '39a6a86f579a473083fa3e3669d9e343'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'detrazione'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3b03eb088cfa47d3bc5c9506eb183b8a'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'importo_totale_calcolato'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3b05186fc8674b0ea6c5b566ff058aad'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'tipologia_immobile'
                            value: 'stazione_smistamento'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3bfad4c37b364f4a881b902c5433bef8'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'data_inizio_occupazione'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3e327f9c852e4041ae6f59e47dd343b9'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'stato'
                            value: 'parzialmente_pagato'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3eda723bf8244a11823a1beb4b70335c'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'quota_provinciale_tari'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3eec546bd90f4f819a87065628858672'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'importo_totale_calcolato'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3f8a718932e24f1486f35bbb935ae4e6'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'importo_versato'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '402293a211c04af09bd8ed3205b54b9a'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'quota_provinciale'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '408622b31ec44c92af6a8509db805ccb'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'destinazione_uso'
                            value: 'industriale'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40dab04b13de43bcbc1e34244aebed60'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'categoria_catastale'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4108b583212b4027977d3d72ce5014cf'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'numero_pratica'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '414b4d23069943eaa63f69103a2fb460'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'note'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '416595d4257c402ba911911382ec8e9a'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'detrazione'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '439f3615bb3843509fef4f5b6812dc08'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44384f5663ba4268b6f47d913b6feb95'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'comune'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '484597d111a2421a8270deebeac6b7af'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'aliquota_stato'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48ced72f6cf448df820c6674451245f9'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'particella'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '49b963f4fd324638a87b9572224667d4'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'comune_competente'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4ac8f975f50249348ab38210272c9c49'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'tipologia_immobile'
                            value: 'cabina_secondaria'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4cea56a8a3354b41865d5e903020bd66'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'building'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4e4023507e8c435e8cbdde8eab381bc5'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'destinazione_uso'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '501e04ed706a46418fb7315dabf7103a'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'titolo_possesso'
                            value: 'comodato'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '50c53b3127ff4502859a1d61071db0da'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'tipo_pratica'
                            value: 'verifica_rendita'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '519e806db6cd4eb7ae1953f4c99fa2ef'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'tipologia_immobile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '524890b014274c3aa1af0e59ff0af88b'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'tipo_tassa'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54e14dfeb55542d4947a884ae4ced23e'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'note'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '554e9dc2f200485cb85f2a96ed894e65'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56618b3891dd479a939c2231b377dc80'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'riduzione_applicata'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '5809a2165a2d4480a6c678bacfade388'
                        key: {
                            category: 'x_snc_gestione_pat_dati_catastali'
                            prefix: 'CAT'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '58f3fededd9448ca93b7c32e8c332c4c'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'assegnato_a'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '596ff71aeb9f444eb5225a2b69c7cd8e'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5ab45854dea94cdba7f498d6326972dc'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'tassa_immobile'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5aee81b42e074fe9b67de19df6e15f27'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'categoria_catastale'
                            value: 'altro'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5b5c8d21aa014f298df7dedcb2e82fbf'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'data_versamento'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5bc201699d2c440eba82098078d827c5'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'superficie_esclusa'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5be5bdede81040c0be40d7a026c9f533'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'codice_interno'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5cf5ab406b2c42ef9514dfd7316c30c0'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'anno_fiscale'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5f02dad2d74943c98910f2f322343593'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'building'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5f40042d5b174d2b8d737e2fa1d87373'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60a0b8202f4043e087c34385bc0b6b3e'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'building'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60ee8016dc9b4433bf19a9f102233654'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'stato_pratica'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '61c15f36b80d4dbe94cd97f16d13a006'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'tipologia_immobile'
                            value: 'foresteria'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '623ad4557f7f444dbd412e5cf933c236'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'business_unit'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '62e2306d4b6147d1a000dc708a5b3de4'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'ente_destinatario'
                            value: 'catasto'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '63d9f25560f342d59629624284e9ee47'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'codice_tributo'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '64bc0c27393247bb96f884a76a42cbc7'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'note'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '64d15aa17f95410ba54db93146483bce'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'rendita_catastale'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '66249b9affe946928a7ba97c0f7c5213'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'quota_provinciale_tari'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '668a36b1075644e3affe36f47a800723'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'motivo_esenzione'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66acaaa88a694744819bbbfcb0e1db78'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'percentuale_riduzione'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66cbd2a6a9bb41eaadf02a53348cd51e'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'anno_riferimento'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6788a9d884114080998431e71044705e'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'stato'
                            value: 'pagato'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '682d9ae259d042e3a9903a0d57b13d27'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'data_chiusura'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '693fa221148c4a69b21918e14102055b'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69876b2624c742b394eb1b44d1ebaaca'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'tariffa_fissa'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b684d0414774753b071e97b54e92072'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'stato'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b779356908b4aee937c59d619e93a7f'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'percentuale_possesso'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6c01804660c44f179b8b16b3f1dd1228'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'tipo_pratica'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6d24ac79c4af4535aa81327a9900e6d7'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'ente_destinatario'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6e9c7c25257a467ba84ef0bd06b98148'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'subalterno'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6ec5e3b5056e47c3be4f0f94b2d57d85'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'tipo_pratica'
                            value: 'ricorso_tributario'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6f30ead874c34c13ba63e75984b85dc3'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'tariffa_variabile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '712be89ef5b94f08b3f3cd5101bf7af7'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'quota_provinciale'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72cfff67edfc440b8cdaf742383cda8b'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'classe'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '732c918a6835463e8995e0d2cf9ceb06'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7396905e14f847bcb60b975d65908a38'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'data_scadenza'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73b3274df517484388e08b2549ab853a'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'priorita'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '758f56d393334f3a920c406053556ed3'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '759934f2449e4588a1ec304901accfed'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'superficie_tassabile'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75fa27bf9e444740a5e670e1c366a10e'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '76fe4902107c411dbb2ffaebbbad47af'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'descrizione_categoria'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '782a80e411484a5dbcf76d00442ae4e4'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'foglio'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7a14de8b320a4243bb342ced47f909fa'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'priorita'
                            value: 'media'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7aa05613f74449698abe4bc2b9983d3e'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7afbd4ce92b447eb85fbe4c50ba088db'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'categoria_catastale'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7b6b5ebe147d4170ad68a4100950e436'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'particella'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '7bdf53cc160e4bfbbdbb557f91acd2ec'
                        key: {
                            category: 'x_snc_gestione_pat_dati_immobiliari'
                            prefix: 'IMM'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7c2b079c5196462883cdc3f1ec26c79a'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'base_imponibile'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7d9b8a12273c4b61bcb72e11995019ce'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'note'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ffdb1ffaee741cf80418162ca0957db'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'importo_dovuto'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8004fd3359974a11817cd6c6b44d3f70'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'stato'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '813bf82b60f44bb7adb80e8f4a98f589'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'titolo_possesso'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '827d21dade024bfc9944dcf1a9e91233'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'categoria_catastale'
                            value: 'c_2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8481748a75604eaca9da4317b334628c'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'data_apertura'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '851a1b2124fe47929017c26e28dbd8da'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'tipologia_immobile'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '85e8495d6887486788c42d2485dedae4'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8623da2b673347ffbf113c52cb08fb5f'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'titolo_possesso'
                            value: 'diritto_superficie'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '877bfc327914419db9cf75c0f1ad14af'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'note'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '886163d1e5914de0aa073f24172127c2'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '889c9531aa4946168311bae94d6cd3c7'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'data_accatastamento'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '891f6f92be944c7f8c11f37c8d2ee313'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'anno_fiscale'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '89b7178b177a4ac7acd8bcb84d19b4b7'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'tipo_tassa'
                            value: 'imu'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a26cab96b0949daa2c9b297395c997c'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'tassa_immobile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8a5d5ad6acc145a6aabf75f495d14a73'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'note'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8b0f46fc54a2473c80efd48216755f5d'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'ente_destinatario'
                            value: 'comune'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d212748d8684898a8fdc3bc53bb8b97'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'aliquota_imu_cat_d'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e023abffafe46da8b320f03a235ab82'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'superficie_tassabile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8e9d5e6866ba4434aa8bd8ad292ca92c'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'esenzione'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f111f56f8754a2bb1455e451e8ca141'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'aliquota_imu_cat_d'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f516b2313e84a0c8910b358dc152daf'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'mesi_competenza'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f7e01610ab84a63874e97d006e07f65'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'note'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '926a499766114986abfd229291b61791'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'tipo_tassa'
                            value: 'tari'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9337ded96a2d4444979c213f7487e434'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'assegnato_a'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9418b6bf005244eeb3dd50f1980d3533'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'data_chiusura'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '945a722f3b444b76a84a3c01e5c85b65'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'importo_calcolato'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '955326f4f3934af9a3252325a89176ec'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'tipologia_immobile'
                            value: 'altro'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9597365b2ed54164abe0fbff5c3803a8'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'aliquota_imu_cat_d_stato'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '96fdc3a83c1a4b85a08bb839f4a50be2'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9706e7bfc7364ec1a38c98d060760c9f'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'tariffa_tari_variabile'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98a3db418afe473badc64f3430e1f14c'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'comune'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a9154404c2340239e43175835e64fb2'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'delibera_riferimento'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9b63b2acbfbd4b94aa8b2d56cbedd53c'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'stato'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9cb7440d45ee49d081b2220af4414546'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'categoria_tari'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9cfe44695c694bfb86da11a73e80764d'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'titolo_possesso'
                            value: 'concessione'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9df32c090d19423c86b6c67a8d61a933'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0039a057b454d3e99cd5f7d3f74cc53'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'categoria_tari'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a01e4cad4db6430892aef21cf61f83dc'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'mesi_competenza'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a138f7b21da14994ae3df310e02fefe4'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'importo_calcolato'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a187511c832b4c1992e0eb558b2452d0'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'categoria_catastale'
                            value: 'd_7'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a3f1ad3bfff64e51832800e578c4d508'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'tipologia_immobile'
                            value: 'ufficio'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a409c96c853a4a8ca717c389e815e5d4'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'subalterno'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a414cfa81b0b450f99a93a9c0ae99538'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'stato_pratica'
                            value: 'completata'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8a7b2cdb4464b2792d0b6e779a37224'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'aliquota_imu_cat_d_stato'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8c6f0d4cd1447b69606225a8b70483a'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'data_inizio_occupazione'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8f39af1fedf4b96bd2cd1712f39d2a4'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'sezione'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a8f82f2646e14c7d892bc80f48f4d0a6'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'number'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ab47655d6b0943a1bff7ba3fef1127fa'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'abb86b2fb3894ac0989f70d604b6cca7'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'percentuale_possesso'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac6e7d69443940ed9f8ec3ec74db9abb'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'superficie_totale'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aca4f39a94e049c09ee9d70e3b147eb3'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'importo_dovuto'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ad17d49c74474659bff51d241e24b6fe'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'titolo_possesso'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ad8d1dc78a924f309659298384499e3a'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'moltiplicatore_categoria'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b0326237c7ae4f9192bb1a9463ac6913'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'superficie_occupata'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b216f30950b84215a6d42e22844f40c6'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'codice_interno'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b34c3e745f554896abcba67518c599f9'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'codice_catastale_comune'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b36cf69fa6684298a959d5aed424e47b'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b3ba471a9cfa44cc81cf26716ce7d442'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'tariffa_tari_fissa'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b3c82affdf3a4b6a92555da754f746a2'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'tipo_tassa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b470a672e1784228ae275eca17f3498c'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'stato'
                            value: 'contestato'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b50404f111b64d4ea47a6dc751b9407b'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'tipo_pratica'
                            value: 'variazione_docfa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b582aa318d844255948c18f3637e5532'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'tipo_pratica'
                            value: 'accatastamento'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b58ecc7d66b74648a9d993be42048349'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'periodo_a'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b804d6b757434b469713f2033aadcd12'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b8478cfec52b4ba4aa9488b3f9e47cdb'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'tipologia_immobile'
                            value: 'centrale_elettrica'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b8cca1fab3ef4f6397fc8f346247f07d'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'stato_pratica'
                            value: 'aperta'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'b8fe792d1dd74dcebb7682607aed0cea'
                        key: {
                            category: 'x_snc_gestione_pat_tasse_immobile'
                            prefix: 'TAX'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b91af8059e4e482189e8ef6771172301'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'anno'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb9b3ab2fd204b0ab413b2a2cb4fd81e'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'superficie_occupata'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbf2d51088a74061be21bde8ba001326'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'percentuale_riduzione'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bd627b4fcb7d4c3b9fac20376aacf3f3'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'tassa_immobile'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bda73d297e5f453d8dcd0474cc92eb11'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'descrizione'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'beb0ab838bbb4ab9a1e029b9721ce9cf'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'stato_immobile'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bf2043b11d094215b853fabb2b060276'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'stato_pratica'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bf734d34840742c09e6cf58891db75ba'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'note'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf857b73819643509b2cd66d35b837e0'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'zona_censuaria'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c04650f6a59845f691c761a14c49d4b5'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'superficie_catastale'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c1e307032eb544b1aee7c851e5200dfc'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'categoria_catastale'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c1f621d08cbf43f18400a02bff96cab6'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'riduzione_applicata'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c289018e6a244b99b38336291a938cb5'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'importo_fisso_calcolato'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c33a364d100a4586953ce58144eae753'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'categoria_tari'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c487342587094c40963cf949b7e89404'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'proprietario'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c552ee7df1ee4ef0b9bd475e3d0c89e0'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'data_fine_occupazione'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c62265a94c2144b2b410efe4ec811f20'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'importo_spesa'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c7773a1ba5d34c4298e7c9e4a0017650'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'building'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c7b1a93cfd044c66a608bb281bf7ab2c'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'categoria_catastale'
                            value: 'a_10'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c83b6a69d5274a73a4bbf8f167cab04a'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'note'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c91103dcb6a74e6a99f3b73f3d63c949'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'rendita_catastale'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c93a55fc5aff4d5faa58fa34a80ae117'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'periodo_da'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ca6276fa46424a40b1a1884c7c924373'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'categoria_catastale'
                            value: 'd_8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb0f9658637a465e9dbc8116bfa47195'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'professionista'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc1f22860562493ba019f108f586d74e'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'stato_immobile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd2c674bec984ff68f5b0fe8fc165a12'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'zona_censuaria'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ce2456322f284b73b6f466f6e534cb75'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'ente_destinatario'
                            value: 'altro'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0626cebd72c416bb0cd5d48a9ce5210'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'coefficiente_rivalutazione'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd0c63067ad1b44eaaf37aae4753ac0f9'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'stato_immobile'
                            value: 'in_uso'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd361d0557021457cac473036ef793f26'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'destinazione_uso'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd56f9a7fface4698a52da171852aca1e'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'motivo_esenzione'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd657495ba49847608ceb4ae2ad792360'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd744936148d249ae975f10e338b5a984'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'building'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd74ca527b8b245d7972d766244362aa5'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'titolo_possesso'
                            value: 'proprieta'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd825df94ac464e568ce2db0ac8a9e345'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'stato_immobile'
                            value: 'ceduto'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd913ba117bc544d1a24df295c5ce3e24'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'stato_immobile'
                            value: 'dismesso'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd938a0804d12475c879298c84aa94721'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9a8e37eb93f42c48cc3dc3a81489620'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'data_accatastamento'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc667392b9e444c68d3453e1766d61ce'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'tariffa_tari_variabile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc9e7b806ffb42298a614b8cc059ded3'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'importo_versato'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dd3de07e50e94fb79bceca778e2b374e'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'superficie_catastale'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ddff40126d1a4ad483d54863f631738a'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'descrizione_categoria'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dfdce2022cf5484ea3bc0ab712545b47'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'stato'
                            value: 'verificato'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e1b3cbda277443febf9b2b635a6518c3'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'stato'
                            value: 'in_aggiornamento'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e2cc49fc4441499d86da568fe3d5295b'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'stato_immobile'
                            value: 'in_ristrutturazione'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e5610500ce204504b7169843d81dc511'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'stato_pratica'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e5d68def995e4539bbd6c1f602cf67f0'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'coefficiente_rivalutazione'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5d731656af64f23a869118c387b044c'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e65d40478b164c679de8a7e6a488a5c8'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e7736ce811014d499a755a85f21d81db'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'business_unit'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e78f85b0006b49a7a55fbf2b8727c8de'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e8ef1089ca314d3fb8ad28797716ea21'
                        key: {
                            name: 'x_snc_gestione_pat_aliquote_comunali'
                            element: 'delibera_riferimento'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ece6b4a8743e44c38cd976cbf91a5758'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'rendita_catastale'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee1ee60991ff4ef7a20eae26ba2f51be'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'data_versamento'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee20a644e1fa41938cef3199f3c5b955'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'numero_pratica'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eea9e18b5f5649e687fe013406b1f6a9'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'destinazione_uso'
                            value: 'commerciale'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef17e7ed5a934ff99fff5bd3dbd989de'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'classe'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ef93adb2d8ea4f25902e4a422aad8ac9'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'tipo_tassa'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f0183fabb7594bce9535896fad2e056b'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'professionista'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f125312859e74724807326ee5018a6ff'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                            element: 'stato'
                            value: 'calcolato'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f259a52c32354762a87158d6c8800429'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'comune_competente'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f354f6c7499345eb9813a56d5e95d06e'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'descrizione'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4250eca7ae64c22b174668cc09c1dd8'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f4555b93997b413e83ccaeeda927ca9f'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'base_imponibile'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f48608e1ff8042a3bba728db807fb1a0'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_tari'
                            element: 'superficie_esclusa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f52567ea2d284ce992752483628cc316'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'tipologia_immobile'
                            value: 'cabina_primaria'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f5c35dc340294ffb9837f0474d7a8544'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'tipo_pratica'
                            value: 'frazionamento'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f5c82478dff14138b73fa265cc9a6819'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'priorita'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f68a7f7d55ef4cf2b3979ddd86cba505'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'aliquota_comunale'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f6dee512a769490495dcb36232c31dae'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'tipo_pratica'
                            value: 'dichiarazione_tari'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f728f9c64f064b138e8b51a3b418d74e'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'comune_competente'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f73367f7634d49d28e1e7db106b44c22'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'anno_riferimento'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f73581af9b204f04a156f6690cc1e99b'
                        key: {
                            name: 'x_snc_gestione_pat_tasse_immobile'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f74a898ce17b47548787f6f430310f0e'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'priorita'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fad41879df0c44f0854e1fa291b9827e'
                        key: {
                            name: 'x_snc_gestione_pat_dati_catastali'
                            element: 'stato'
                            value: 'attivo'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fae29ed201144589bb4bf7032efa6b29'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'stato_immobile'
                            value: 'in_costruzione'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fbf488a549484c2184f831224313c8e3'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'tipo_pratica'
                            value: 'richiesta_esenzione'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc20275428db4c2c979919a189d1f149'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'percentuale_occupazione'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fd1546854d4245d8823fe46547d79248'
                        key: {
                            name: 'x_snc_gestione_pat_dettaglio_imu'
                            element: 'aliquota_comunale'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fed1220583d144fdb8e98747215f3b96'
                        key: {
                            name: 'x_snc_gestione_pat_dati_immobiliari'
                            element: 'destinazione_uso'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fef585c994de4b8f9ff0f2f6199c4130'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'stato_pratica'
                            value: 'in_lavorazione'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ffe2bbf80a534f53a4794b311d5cbb1e'
                        key: {
                            name: 'x_snc_gestione_pat_pratiche_immobiliari'
                            element: 'data_apertura'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
