(function() {

	var tableContainer = "tableContainer";

	Ext.define("ArpavNeveValanghe.view.legenda.Detail", {
		extend : "Ext.Panel",
		xtype : 'arpavlegendadetail',

		config : {
			title : 'Legenda',
			layout : 'fit',
			items : [{
						docked : 'bottom',
						xtype : "arpavactions",
						showInfoButton : true
					}, {
						xtype : 'panel',
						itemId : tableContainer,
						styleHtmlContent : true,
						scrollable : true
					}],
			tipo : null
		},

		initialize : function() {
			this.callParent(arguments);
			var rows = [], hedars = [], title = null, description = null;

			if (this.config.tipo === "scaladelpericolo") {
				title = "Pericolo valanghe";
				description = "Scala Europea del pericolo di valanghe";
				headers = [{
							html : 'Scala del pericolo',
							cssclass : 'col40'
						}, {
							html : 'Icona',
							cssclass : 'col60'
						}];
				rows = [{
					columns : [{
								html : 'molto forte - forte'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/DANGER/A_05_04.png"/>'
							}]
				}, {
					columns : [{
								html : 'marcato'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/DANGER/A_03_03.png"/>'
							}]
				}, {
					columns : [{
								html : 'moderato'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/DANGER/A_02_02.png"/>'
							}]
				}, {
					columns : [{
								html : 'debole'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/DANGER/A_01_01.png"/>'
							}]
				}, {
					columns : [{
								html : 'informazioni insufficienti'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/DANGER/A_00_00.png"/>'
							}]
				}, {
					columns : [{
						html : 'Manto nevoso assente o con copertura discontinua fino in quota. Chiazze di neve o neve nei soli canaloni.'
					}, {
						html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/DANGER/A_00_01.png"/>'
					}]
				}];
			} else if (this.config.tipo === "luoghipericolosi") {
				title = "Luoghi pericolosi: esposizioni";
				description = "La parte in nero indica il versante pericoloso.";
				headers = [{
							html : 'Descrizione',
							cssclass : 'col40'
						}, {
							html : 'Simbologia',
							cssclass : 'col60'
						}];
				rows = [{
					columns : [{
								html : 'Tutti i versanti.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/VERSANTI/A_01_ALL.png"/>'
							}]
				}, {
					columns : [{
								html : 'Isolati pendii in tutte le esposizioni.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/VERSANTI/A_18.png"/>'
							}]
				}, {
					columns : [{
								html : 'Nessun versante.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/VERSANTI/A_00.png"/>'
							}]
				}, {
					columns : [{
								html : 'Poca nve al suolo. Assenza di neve.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/VERSANTI/A_98.png"/>'
							}]
				}, {
					columns : [{
								html : 'Nessuna informazione.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/VERSANTI/A_99.png"/>'
							}]
				}, {
					columns : [{
								html : 'Versanti settentrionali.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/VERSANTI/A_04_WNE.png"/>'
							}]
				}, {
					columns : [{
								html : 'Versanti orientali.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/VERSANTI/A_17_E.png"/>'
							}]
				}, {
					columns : [{
								html : 'Versanti meridionali.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/VERSANTI/A_05_E_S_W.png"/>'
							}]
				}, {
					columns : [{
								html : 'Versanti occidentali.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/VERSANTI/A_16_W.png"/>'
							}]
				}];
			} else if (this.config.tipo === "fasciaaltimetrica") {
				title = "Luoghi pericolosi: fasce altimetriche";
				description = "";
				headers = [{
							html : 'Descrizione',
							cssclass : 'col40'
						}, {
							html : 'Simbologia',
							cssclass : 'col60'
						}];
				rows = [{
					columns : [{
						html : 'Alte quote (può essere accompagnata dalla quota del limite inferiore).'
					}, {
						html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/QUOTE/HS_alta.png"/>'
					}]
				}, {
					columns : [{
						html : 'Quote medie (può essere accompagnata dalla quota del limite inferiore).'
					}, {
						html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/QUOTE/HS_media.png"/>'
					}]
				}, {
					columns : [{
								html : 'Da fondovalle fino in quota.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/QUOTE/HS_tutto.png"/>'
							}]
				}, {
					columns : [{
								html : 'Poca neve al suolo. Assenza di neve.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/QUOTE/HS_no%20info.png"/>'
							}]
				}, {
					columns : [{
								html : 'Nessuna informazione.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/QUOTE/HS_no%20info.png"/>'
							}]
				}];
			} else if (this.config.tipo === "tipovalanga") {
				title = "Tipo di valanghe";
				description = "";
				headers = [{
							html : 'Descrizione',
							cssclass : 'col40'
						}, {
							html : 'Simbologia',
							cssclass : 'col60'
						}];
				rows = [{
					columns : [{
								html : 'Valanghe di neve fresca.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/TIPO/N_01_valanghe.png"/>'
							}]
				}, {
					columns : [{
								html : 'Vento. Lastroni da vento.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/TIPO/N_07_valanghe.png"/>'
							}]
				}, {
					columns : [{
								html : 'Valanghe di neve umida.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/TIPO/N_12_valanghe.png"/>'
							}]
				}, {
					columns : [{
								html : 'Valanghe a lastroni.'
							}, {
								html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/TIPO/N_08_valanghe.png"/>'
							}]
				}];
			}
			

			// add table to panel
			this.down('#' + tableContainer).add({
						xtype : "arpavtable",
						data : [{
									title : title,
									description : description,
									cssclass : 'grid maxsize960 legenda',
									headers : headers,
									rows : rows
								}]
					});

		}
	});
})();