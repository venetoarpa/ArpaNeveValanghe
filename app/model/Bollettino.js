Ext.define("ArpavNeveValanghe.model.Bollettino", {
			extend : 'Ext.data.Model',
			config : {
				fields : [{
							name : 'situazione',
							type : 'string'
						}, {
							name : 'previsione',
							type : 'string'
						}, {
							name : 'indicazioni',
							type : 'string'
						}, {
							name : 'previsore',
							type : 'string'
						}],
						
				hasMany : [{
					model : 'ArpavNeveValanghe.model.Scadenza',
					name : 'scadenze',
					associationKey : 'scadenza'
					
				}]
			},
			
			getScadenza : function(dataScadenza) {
				return this.scadenze().data.get(dataScadenza);
			}
			
		});