Ext.define("ArpavNeveValanghe.store.Sensore", {
			extend : "Ext.data.Store",
			requires : ['Ext.data.reader.Xml', 'Ext.data.proxy.Rest'],

			config : {
				model : "ArpavNeveValanghe.model.Sensore",
				storeId : "StazioneStore",
				autoLoad : false,
				url : null
			},

			initialize : function() {
				this.setProxy({
							type : 'rest',
							url : this.config.url,
							reader : {
								type : 'xml',
								record : 'SENSORE',
								rootProperty : 'STAZIONE'
							}
						});
			},

			parseDatoRawData : function(sensore) {
				var rawdata = sensore.raw;
				var records = rawdata.childNodes;
				for (var i = 0; i < records.length; ++i) {
					var record = records[i];
					if (record.tagName && record.tagName.toLowerCase() == "dati") {
						var istante = record.getAttribute("ISTANTE");
						var text = istante.substr(6,2) + '-' + istante.substr(8,2);
						sensore.dati().add(Ext.create("ArpavNeveValanghe.model.Dato", {
											istante : text,
											vm : record.childNodes[0].textContent
										}));
					}
				}
				return sensore;
			}

		});