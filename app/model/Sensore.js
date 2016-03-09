Ext.define("ArpavNeveValanghe.model.Sensore", {
			extend : "Ext.data.Model",
			
			config : {
				fields : [{
					name : "id", 
					type : "string",
					mapping : "ID"
				}, {
					name : "paramnm", 
					type : "string",
					mapping : "PARAMNM"
				}, {
					name : "type", 
					type : "string",
					mapping : "TYPE"
				}, {
					name : "unitnm", 
					type : "string",
					mapping : "UNITNM"
				}, {
					name : "unitcode", 
					type : "string",
					mapping : "UNITCODE"
				}, {
					name : "note", 
					type : "string",
					mapping : "NOTE"
				}, {
					name : "freq", 
					type : "string",
					mapping : "FREQ"
				}],
				
				hasMany : [{
							model : 'ArpavNeveValanghe.model.Dato',
							name : 'dati'//,
							//associationKey : 'dati'
						}],

				belongsTo : {
					name : 'stazione',
					model : "ArpavNeveValanghe.model.Stazione"
				}
			}
		});