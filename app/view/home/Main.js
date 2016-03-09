Ext.define("ArpavNeveValanghe.view.home.Main", {
			extend : "Ext.Panel",

			xtype : "arpavhomepanel",

			config : {
				title : 'Previsione Pericolo Valanghe',
				layout : "fit",
				items : [{
							docked : 'top',
							xtype : "arpavactions",
							showDate : true
						}, {
							docked : 'bottom',
							xtype : "arpavactions",
							showLegend : true,
							showInfoButton : true,
							showZoneButton : true
						}],
				date : null
			}
			
		});