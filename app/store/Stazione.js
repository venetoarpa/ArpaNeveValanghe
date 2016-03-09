Ext.define("ArpavNeveValanghe.store.Stazione", {
			extend : "Ext.data.Store",
			requires : ['Ext.data.reader.Xml', 'Ext.data.proxy.Rest'],
			config : {
				model : "ArpavNeveValanghe.model.Stazione",
				storeId : "StazioneStore",
				autoLoad : false,

				proxy : {
					type : 'rest',
					url : arpavconfig.config.xmlStazioniUrl,
					reader : {
						type : 'xml',
						record : 'STAZIONE',
						rootProperty : 'METEOGRAMMI'
					}
				}
			}
});