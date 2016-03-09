Ext.define("ArpavNeveValanghe.model.Stazione", {
			extend : "Ext.data.Model",

			config : {
				fields : [{
							name : 'id',
							type : 'string',
							mapping : 'NOME'
						},{
							name : 'idstaz',
							type : 'string',
							mapping : 'IDSTAZ'
						}, {
							name : 'nome',
							mapping : 'NOME'
						}, {
							name : 'latitudine',
							type : 'string',
							mapping : 'Y'
						}, {
							name : 'longitudine',
							type : 'string',
							mapping : 'X'
						}, {
							name : 'quota',
							type : 'int',
							mapping : 'QUOTA'
						}, {
							name : 'tipostazione',
							type : 'string',
							mapping : 'TIPOSTAZIONE'
						}, {
							name : 'provincia',
							type : 'string',
							mapping : 'PROVINCIA'
						}, {
							name : 'comune',
							type : 'string',
							mapping : 'COMUNE'
						}, {
							name : 'linkstaz',
							type : 'string',
							mapping : 'LINKSTAZ'
						}, {
							name : 'zona',
							type : 'int',
							mapping : 'ZONA'
						}],

				hasMany : [{
							model : 'ArpavNeveValanghe.model.Sensore',
							name : 'sensori'
						}],

				belongsTo : {
					name : 'area',
					model : "ArpavNeveValanghe.model.Area"
				}
			}
		});