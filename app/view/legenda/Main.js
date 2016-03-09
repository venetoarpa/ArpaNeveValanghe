Ext.define('ArpavNeveValanghe.view.legenda.Main', {
			extend : 'Ext.Panel',
			xtype : 'arpavlegendamain',

			config : {
				title : 'Legenda',
				layout : 'fit',
				items : [{
							docked : 'bottom',
							xtype : "arpavactions",
							showInfoButton : true
						}, {
							xtype : 'arpavlegendalist'
						}]
			}

		});
