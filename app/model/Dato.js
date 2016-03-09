Ext.define("ArpavNeveValanghe.model.Dato", {
			extend : "Ext.data.Model",

			config : {
				fields : [{
							name : "istante",
							type : "string",
							mapping : "@ISTANTE"
						}, {
							name : "vm",
							type : "string",
							mapping : ".VM"
						}],

				belongsTo : {
					name : 'sensore',
					model : "ArpavNeveValanghe.model.Sensore"
				},

				proxy : {
					type : 'memory',
					reader : {
						type : 'xml',
						record : 'DATI'
					}
				}
			}
		});