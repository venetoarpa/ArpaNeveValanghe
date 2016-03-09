Ext.define("ArpavNeveValanghe.model.Scadenza", {
			extend : 'Ext.data.Model',
			config : {
				fields : [{
							name : 'date',
							type : 'string',
							mapping : '@data'
						}],

				hasMany : [{
							model : 'ArpavNeveValanghe.model.Area',
							name : 'aree',
							associationKey : 'area'
						}],

				belongsTo : {
					name : 'bollettino',
					model : "ArpavNeveValanghe.model.Bollettino"
				},

				proxy : {
					type : 'memory',
					reader : {
						type : 'xml',
						record : 'scadenza'
					}
				}
			},
			
			getArea : function(nomeArea) {
				return this.aree().data.get(nomeArea);
			}
			
		});