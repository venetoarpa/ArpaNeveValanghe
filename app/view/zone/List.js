Ext.define('ArpavNeveValanghe.view.zone.List', {
			extend : 'Ext.List',
			xtype : 'arpavzonelist',

			config : {
				itemTpl: '{id}',
				listeners : {
					itemtap : function(dataview, index, target, record, e, eOpts) {
						arpavbus.fireEvent('showzona', record.getId());
					}
				}
			},
			
			initialize : function() {
				this.callParent(arguments);
				this.loadData();
			},
			
			/*
			 * get minimal data from store and update list
			 */
			loadData : function() {
				var store = Ext.getStore("BollettinoStore");
				var areeStore = store.getBollettino().getScadenza(arpavconfig.config.currentDate).areeStore;
				this.setData(arpavutil.getFirstLevelObjs(areeStore));
			}
			
		});
