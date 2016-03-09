Ext.define("ArpavNeveValanghe.view.zone.Detail", {
	extend : "Ext.Panel",
	xtype : "arpavzonadetail",

	config : {
		zona : null,
		layout : "fit",
		styleHtmlContent : true,
		items : []
	},

	initialize : function() {
		this.callParent();
		// add actions
		this.add([{
					docked : 'top',
					xtype : "arpavactions",
					showDate : true
				}, {
					docked : 'bottom',
					xtype : "arpavactions",
					showStazioniButton : {
						nomeZona : this.config.zona
					},
					showInfoButton : true,
					showLegendaButton : true
				}]);
	},

	loadData : function() {
		var store = Ext.getStore("BollettinoStore");
		var bollettino = store.getBollettino();
		var scadenza = bollettino.getScadenza(arpavconfig.config.currentDate);
		var area = scadenza.getArea(this.config.zona);
		
		// data not required
		delete area.data.stazioni;
		
		// set data to view
		this.setData(area.data);
	},

	addTable : function() {
		// remove previous table
		this.tablecontainer.removeAll();
		this.resetScroller(this.tablecontainer);
		// get updated data
		var data = this.getData();
		var rows = [];

		// pericolo
		var icon_danger = data['icon_danger'];
		var text_pericolo = data["pericolo"];
		if (icon_danger || text_pericolo) {
			// header
			rows.push({
						columns : [{
									html : "Pericolo",
									colspan : 2,
									cssclass : "rowseparator"
								}]
					});
			rows.push({
						columns : [{
							html : icon_danger ? '<img width="100%" src="http://' + icon_danger + '"/>' : ''
						}, {
							html : text_pericolo ? text_pericolo : ''
						}]
					});
		}
		// luoghi pericolosi
		var icon_versanti = data["icon_versanti"];
		var icon_quote = data["icon_quote"];
		var text_luoghipericolosi = data["luoghi_pericolosi"];
		var text_quote = data["quote"];
		if (icon_versanti || text_luoghipericolosi || icon_quote || text_quote) {
			rows.push({
						columns : [{
									html : "Luoghi pericolosi",
									colspan : 2,
									cssclass : "rowseparator"
								}]
					});
			// versanti
			if (icon_versanti || text_luoghipericolosi) {
				rows.push({
							columns : [{
								html : icon_versanti ? '<img width="100%" src="http://' + icon_versanti + '"/>' : ''
							}, {
								html : text_luoghipericolosi ? text_luoghipericolosi : ''
							}]
						});
			}
			// quote
			if (icon_quote || text_quote) {
				rows.push({
							columns : [{
								html : icon_quote ? '<img width="100%" src="http://' + icon_quote + '"/>' : ''
							}, {
								html : text_quote ? text_quote : ''
							}]
						});
			}
		}
		
		// tipo valanga
		var icon_tipo = data["icon_tipo"];
		var text_tipo = data["tipodivalanga"];
		if (icon_tipo || text_tipo) {
			rows.push({
						columns : [{
									html : "Tipo di valanghe",
									colspan : 2,
									cssclass : "rowseparator"
								}]
					});
			rows.push({
						columns : [{
							html : icon_tipo ? '<img width="100%" src="http://' + icon_tipo + '"/>' : ''
						}, {
							html : text_tipo ? text_tipo.replace("Tipo di valanga: ", "") : ''
						}]
					});
		}
		// neve fresca
		var text_nevefresca = data["neve_fresca"];
		if (text_nevefresca) {
			rows.push({
			columns : [{
												html : "Neve fresca",
												colspan : 2,
												cssclass : "rowseparator"
											}]
			});
			rows.push({
			columns : [{
										html : '<img width="100%" src="http://www.arpa.veneto.it/neve_valanghe/images/simbolo_neve2.jpg"/>'
									}, {
										html : text_nevefresca
									}]
			});
		}

		// create table
		var table = Ext.create("ArpavNeveValanghe.view.common.Table", {
					data : [{
						cssclass : 'grid maxsize960 zonadetail',
						rows : rows
					}]
				});
		// add table
		this.tablecontainer.add(table);
	},
	
	resetScroller : function (panel) {
		var scroller = panel.getScrollable().getScroller();
		if (scroller) {
			scroller.scrollToTop();
		}
	}
});
