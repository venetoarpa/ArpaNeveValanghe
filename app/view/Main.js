Ext.define('ArpavNeveValanghe.view.Main', {
	extend : 'Ext.Panel',
	xtype : 'arpavmain',

	config : {
		layout : 'fit',
		items : [{
					xtype : 'arpavbanner',
					docked : 'top'
				}]
	},

	initialize : function() {
		this.callParent(arguments);
		this.loadData();
	},
	
	/*
	 * show popup message and retry once closed.
	 * googlemap is loaded with <script> tag, therefore set "refreshLocation" to true to reload index.html (in case of offline startup)
	 */
	onLoadError : function (operation, refreshLocation) {
		var title = "Attenzione";
		var message = operation.error.statusText;
		if(operation.error.status == 0)
			message = "Errore di rete";
		
		var callback = this.loadData;
		if (refreshLocation) {
			callback = function() {
						window.location.href = 'index.html';
					};			
		}
		arpavutil.showPopupMessage(title, message, callback, this);
	},

	loadData : function() {
		var me = this;
		
		var bypassConnectionCheck = false;
		if (Ext.os.deviceType == "Desktop") {
			Ext.Logger.log("Desktop mode, skipping connection check");
			bypassConnectionCheck = true;
		}
		
		if(bypassConnectionCheck || Ext.device.Connection.isOnline()) {
			var s_store = Ext.create("ArpavNeveValanghe.store.Stazione");
			s_store.load({
				callback : function(s_records, operation, success) {
					if (success) {
						// load Sensore store
						s_store.getData().each(function(item) {
							var sensore_store = Ext.create(
									"ArpavNeveValanghe.store.Sensore", {
										url : item.get("linkstaz")
									});
							sensore_store.load({
										callback : function(sensore_records,operation, success) {
											if (success) {
												var data = sensore_store.getData();
												for (var i = 0; i < data.length; ++i) {
													var sensore = data.items[i];
													sensore = sensore_store.parseDatoRawData(sensore);
													item.sensori().add(sensore);
												}
											} else {
												me.onLoadError(operation);
											}
										}
									});
						});
	
						// load Bollettino store
						var b_store = Ext.create("ArpavNeveValanghe.store.Bollettino");
						b_store.load({
									callback : function(records, operation, success) {
										if (success) {
											b_store.parseRawData(records, s_store);
											me.showMain();
										} else {
											me.onLoadError(operation);
										}
									},
									scope : this
								});
					} else {
						me.onLoadError(operation);
					}
				},
				scope : this
	
			});
		} else {
			var operation = {error : {status:999, statusText:"Attivare la connessione dati!"}};
			me.onLoadError(operation, true);
		}
	},
	
	showMain : function() {
		this.add([{
					xtype : "arpavmainnv"
				}]);
	}

});
