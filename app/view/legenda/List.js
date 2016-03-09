Ext.define('ArpavNeveValanghe.view.legenda.List', {
			extend : 'Ext.List',
			xtype : 'arpavlegendalist',

			config : {
				itemTpl : '{title}',
				scrollable : arpavconfig.config.noScrollBounce,
				data : [{
							id : 'scaladelpericolo',
							title : 'Pericolo valanghe'
						}, {
							id : 'luoghipericolosi',
							title : 'Luoghi pericolosi: esposizioni'
						}, {
							id : 'fasciaaltimetrica',
							title : 'Luoghi pericolosi: fasce altimetriche'
						}, {
							id : 'tipovalanga',
							title : 'Tipo di valanghe'
						}],
				listeners : {
					itemtap : function(dataview, index, target, record, e, eOpts) {
						arpavbus.fireEvent('showlegendadetail', record.getId());
					}
				}
			}

		});
