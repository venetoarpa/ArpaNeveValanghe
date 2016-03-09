Ext.define("ArpavNeveValanghe.model.Area", {
			extend : 'Ext.data.Model',
			config : {
				fields : [{
							name : 'nome',
							type : 'string',
							mapping : '@nome'
						}, {
							name : 'pericolo',
							type : 'string'
						}, {
							name : 'neve_fresca',
							type : 'string'
						}, {
							name : 'luoghi_pericolosi',
							type : 'string'
						}, {
							name : 'quote',
							type : 'string'
						}, {
							name : 'tipodivalanga',
							type : 'string'
						}, {
							name : 'ambitidelpericolo',
							type : 'string'
						}, {
							name : 'icon_danger',
							type : 'string'
						}, {
							name : 'icon_limiteneve',
							type : 'string'
						}, {
							name : 'icon_meteo',
							type : 'string'
						}, {
							name : 'icon_quote',
							type : 'string'
						}, {
							name : 'icon_temperature',
							type : 'string'
						}, {
							name : 'icon_tipo',
							type : 'string'
						}, {
							name : 'icon_vento',
							type : 'string'
						}, {
							name : 'icon_versanti',
							type : 'string'
						}, {
							name : 'markerposition'
						}],

				hasMany : [{
							model : 'ArpavNeveValanghe.model.Stazione',
							name : 'stazioni',
							associationKey : 'stazioni'
						}],

				belongsTo : {
					name : 'scadenza',
					model : "ArpavNeveValanghe.model.Scadenza"
				},

				proxy : {
					type : 'memory',
					reader : {
						type : 'xml',
						record : 'area'
					}
				}
			},
			
			getStazione : function(nomeStazione) {
				return this.stazioni().data.get(nomeStazione);
			}
			
		});