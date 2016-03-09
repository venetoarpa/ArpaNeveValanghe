Ext.define('ArpavNeveValanghe.view.MainNavigationView', {
			extend : 'Ext.NavigationView',
			xtype : 'arpavmainnv',
			id : 'mainnavigationview',

			config : {
				defaultBackButtonText : "",
				navigationBar : {
					animation : false
				},
				items : [{
							xtype : 'arpavhomepanel'
						}]
			}
		});
