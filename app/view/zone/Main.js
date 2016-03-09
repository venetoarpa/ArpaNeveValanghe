(function() {	
	
	Ext.define('ArpavNeveValanghe.view.zone.Main', {
				extend : 'Ext.Panel',
				xtype : 'arpavzonemain',

				config : {
					title : 'Elenco Zone',
					layout : 'fit',
					items : [{
								docked : 'top',
								xtype : "arpavactions",
								showDate : true
							}, {
								docked : 'bottom',
								xtype : "arpavactions",								
								showInfoButton : true
							}]
				},

				initialize : function() {
					this.callParent(arguments);
					this.loadList();
				},				
				
				loadList : function() {
					this.add({
								xtype : 'arpavzonelist'
							});
				}

			});
})();