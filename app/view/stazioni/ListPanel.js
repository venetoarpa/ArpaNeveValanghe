Ext.define('ArpavNeveValanghe.view.stazioni.ListPanel', {
	extend : 'Ext.Panel',
	xtype : 'arpavstazionilistpanel',

	config : {
		title : 'Elenco Stazioni',
		layout : 'fit',
		items : [{
					docked : 'bottom',
					xtype : "arpavactions",
					showInfoButton : true
				}],
		zona : null
	},

	initialize : function() {
		this.callParent(arguments);
		this.add({
					xtype : 'arpavstazionilist',
					zona : this.config.zona
				});
		this.add({
			docked : 'bottom',
			xtype : "panel",
			html : "Stazioni nivometriche con dati in diretta su temperatura e altezza neve.",
			cls : "map_legend font_small"
		});
	}

});
