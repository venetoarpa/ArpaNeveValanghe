Ext.define('ArpavNeveValanghe.view.stazioni.List', {
			extend : 'Ext.List',
			xtype : 'arpavstazionilist',

			config : {
				itemTpl: '{id}',
				scrollable : arpavconfig.config.noScrollBounce,
				listeners : {
					itemtap : function(dataview, index, target, record, e, eOpts) {
						arpavbus.fireEvent('showstazione', this.config.zona, record.getId());
					}
				},
				zona : null
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
				var scadenza = store.getBollettino().getScadenza(arpavconfig.config.currentDate);
				var stazioniStore = scadenza.getArea(this.config.zona).stazioniStore;
				this.setData(arpavutil.getFirstLevelObjs(stazioniStore, "nome"));
			}
			
		});
