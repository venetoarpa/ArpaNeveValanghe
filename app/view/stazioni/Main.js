(function() {

	var ACTIONSID = "actions";

	Ext.define("ArpavNeveValanghe.view.stazioni.Main", {
				extend : "Ext.Panel",

				xtype : "arpavstazionipanel",

				config : {
					zona : null,
					layout : "fit"
				},

				initialize : function() {
					this.config.title = this.config.zona;
					this.callParent();
					this.add({
								xtype : "arpavstazionimap",
								zona : this.config.zona
							});
					this.add({
								docked : 'bottom',
								xtype : "arpavactions",
								showStazioniListButton : { nomeZona: this.config.zona},
								showInfoButton : true
							});
					this.add({
								docked : 'bottom',
								xtype : "panel",
								html : "Stazioni nivometriche con dati in diretta su temperatura e altezza neve.",
								cls : "map_legend font_small"
							});
							
				}
			});
})();