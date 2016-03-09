Ext.define("ArpavNeveValanghe.store.Bollettino", {
			extend : "Ext.data.Store",
			requires : ['Ext.data.reader.Xml', 'Ext.data.proxy.Rest'],

			config : {
				model : "ArpavNeveValanghe.model.Bollettino",
				storeId : "BollettinoStore",
				autoSync : false,
				autoLoad : false,

				proxy : {
					type : 'rest',
					url : arpavconfig.config.xmlPrevisioniUrl,
					reader : {
						type : 'xml',
						record : 'bollettino',
						rootProperty : 'previsioni'
					}
				}
			},

			parseRawData : function(records, s_store) {
				var items = [];
				this.stazioni = s_store.getData();				
				for (var i = 0; i < records.length; i++) {
					// var node = records[i].data;
					var node = records[i].raw;
					
					// push ArpavNeveValanghe.model.Bollettino object into data
					items.push(this.parseBollettinoRawData(node.childNodes));
				}
				this.setData(items);
			},

			parseBollettinoRawData : function(records) {
				var config = {}, scadenze = [];
				for (var i = 0; i < records.length; ++i) {
					var node = records[i];
					if(node.tagName) {
						if (node.tagName == "scadenza") {
							scadenze.push(node);
						} else {
							config[node.tagName] = node.textContent;
						}						
					}
				}
				// create ArpavNeveValanghe.model.Bollettino object
				var obj = Ext.create("ArpavNeveValanghe.model.Bollettino",config);
				obj.scadenze().add(this.parseScadenzeRawData(scadenze));
				return obj;
			},

			parseScadenzeRawData : function(records) {
				var items = [], todayOrFuture = false, currentDate = new Date();
				for (var i = 0; i < records.length; ++i) {
					// extract ArpavNeveValanghe.model.Scadenza config data
					var node = records[i];
					var config = {
						id : node.getAttribute("data"),
						date : node.getAttribute("data")
					};
					if (!todayOrFuture
							&& config.date.substring(0, 2) == currentDate
									.getDate()) {
						todayOrFuture = true;
					}

					// create ArpavNeveValanghe.model.Scadenza object
					if (todayOrFuture) {
						var obj = Ext.create(
								"ArpavNeveValanghe.model.Scadenza", config);
						obj.aree().add(this.parseAreeRawData(node.childNodes));
						items.push(obj);
					}
				}
				return items;
			},

			parseAreeRawData : function(records) {
				var items = [];
				for (var i = 0; i < records.length; ++i) {
					var node = records[i], config = {};
					if (node.tagName === "area") {
						var name = node.getAttribute("nome");
						var area = this.parseAreaRawData(node.childNodes);
						if (name.toLowerCase() === "dolomiti") {
							
							var area1 = area.copy();
							var name = "Dolomiti Settentrionali";
							area1.set("nome", name);
							area1.set("id", name);
							area1.set("markerposition", new google.maps.LatLng(arpavconfig.config.map.positions.d_settentrionali[0], arpavconfig.config.map.positions.d_settentrionali[1]));
							this.parseStazioniRawData(area1, 5);
							items.push(area1);
							
							var area2 = area.copy();
							var name = "Dolomiti Meridionali";
							area2.set("nome", name);
							area2.set("id", name);
							area2.set("markerposition", new google.maps.LatLng(arpavconfig.config.map.positions.d_meridionali[0], arpavconfig.config.map.positions.d_meridionali[1]));
							this.parseStazioniRawData(area2, 4);
							items.push(area2);
							
						} else if (name.toLowerCase() === "prealpi") {
							
							var area1 = area.copy();
							var name = "Prealpi Bellunesi";
							area1.set("nome", name);
							area1.set("id", name);
							area1.set("markerposition", new google.maps.LatLng(arpavconfig.config.map.positions.p_bellunesi[0],arpavconfig.config.map.positions.p_bellunesi[1]));
							this.parseStazioniRawData(area1, 3);
							items.push(area1);
							
							var area2 = area.copy();
							var name = "Prealpi Vicentine";
							area2.set("nome", name);
							area2.set("id", name);
							area2.set("markerposition", new google.maps.LatLng(arpavconfig.config.map.positions.p_vicentine[0], arpavconfig.config.map.positions.p_vicentine[1]));
							this.parseStazioniRawData(area2, 2);
							items.push(area2);
							
							var area3 = area.copy();
							var name = "Prealpi Veronesi";
							area3.set("nome", name);
							area3.set("id", name);
							area3.set("markerposition", new google.maps.LatLng(arpavconfig.config.map.positions.p_veronesi[0], arpavconfig.config.map.positions.p_veronesi[1]));
							this.parseStazioniRawData(area3, 1);
							items.push(area3);
						}
					}
				}
				return items;
			},

			parseAreaRawData : function(records) {
				var config = {};
				for (var i = 0; i < records.length; ++i) {
					var node = records[i];
					if(node.tagName) {
						if (node.tagName !== "icone") {
							config[node.tagName] = node.textContent;
						} else {
							var icons = this.parseIconsRawData(node.childNodes);
							for (var key in icons) {
								config[key] = icons[key];
							}
						}	
					}					
				}
				return Ext.create("ArpavNeveValanghe.model.Area", config);
			},

			parseIconsRawData : function(records) {
				var data = {};
				for (var i = 0; i < records.length; ++i) {
					var node = records[i];
					if(node.tagName) {
						data['icon_' + node.tagName.toLowerCase()] = node.getAttribute("image");
					}
				}
				return data;
			},

			parseStazioniRawData : function(area, areaid) {
				this.stazioni.each(function(item) {
					if (item.get("zona") == areaid) {
						area.stazioni().add(item);
					}
				});
			},
			
			getBollettino : function(position) {
				if(position)
					return this.data.items[position];
				else
					return this.data.items[0];
			}

		});