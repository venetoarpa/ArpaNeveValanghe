Ext.define("ArpavNeveValanghe.controller.stazioni.Detail", {
	extend : "Ext.app.Controller",

	config : {
		refs : {
			Panel : "arpavstazionedetail"
		},

		control : {
			Panel : {
				initialize : 'onInitialize'
			}
		}
	},

	onInitialize : function() {
		var zone = null, area = null, stazioni = null, stazione = null;
		var store = Ext.getStore("BollettinoStore");
		var panel = this.getPanel();
		var bollettino = store.getBollettino();
		var scadenza = bollettino.getScadenza(arpavconfig.config.currentDate);
		var area = scadenza.getArea(panel.config.zona);
		var stazione = area.getStazione(panel.config.stazione);
		
		// set data to panel
		panel.config.title = area.get("nome");
		var data = stazione.getData();

		// set template
		var datapanel = Ext.create("Ext.Panel");
		var template = this.template();
		template.overwrite(datapanel.element, data);
		panel.add(datapanel);

		// set cartesian
		var sensori = stazione.sensori().data.items;
		
		for (var i = 0; i < sensori.length; ++i) {
			var sensore = sensori[i];
			// title
			var title = null;
			if (sensore.get("type") === "TEMP") {
				title = "Temperatura - ultime 48 ore";
			} else if (sensore.get("type") === "LIVNEVE") {
				title = "Altezza neve - ultime 48 ore";
			}
			panel.add({xtype : "panel", html : '<h4>' + title + '</h4>', ui: 'blue'});
			// chart
			var lineChart = Ext.create("ArpavNeveValanghe.view.stazioni.Chart", {
						store : sensore.datiStore,
						y_legend : sensore.get("unitnm")
					});
			panel.add(lineChart);
		}
	},
	
	template : function () {
		var t = new Ext.Template('<div>', '<h3>{nome} ({quota}m)</h3>',
				'<p>{comune} ({provincia})</p>', '</div>', 
				'<p>Stazioni nivometriche con dati in diretta su temperatura e altezza neve.</p>');
		return t;
	}
});