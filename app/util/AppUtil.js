Ext.define("ArpavNeveValanghe.util.AppUtil", {
	singleton : true,
	maskCount : 0,
	
	hasConsole : function() {
		return window.console && console.log;
	},

	mask : function(msg) {
		if (this.maskCount == 0) {
			arpavlogger.info("masking");
			Ext.Viewport.setMasked({
						xtype : 'loadmask',
						indicator : true,
						message : msg ? msg : "Caricamento dati"
					});
		}
		this.maskCount++;
	},

	unmask : function(force) {
		if (!force) {
			this.maskCount--;
		}
		if (this.maskCount <= 0 || force) {
			arpavlogger.info("un-masking");
			Ext.Viewport.setMasked(false);
			this.maskCount = 0;
		}
	},

	showPopupMessage : function() {

		if (!arguments)
			return;

		var title = arguments[0];
		var message = arguments[1] ? arguments[1] : "";
		var callback = arguments[2] ? arguments[2] : "";
		var callbackObj = arguments[3] ? arguments[3] : "";
		var me = this;

		// me.unmask(true);

		var messagePanel = {
			xtype : 'panel',
			styleHtmlContent : true,
			html : Ext.String.format("<b>{0}</b>: {1}", title, message)
		};
		if (this.popup && !this.popup.isHidden()) {
			this.popup.add(messagePanel);
		} else {
			this.popup = new Ext.Panel({
						centered : true,
						modal : true,
						width : '90%',
						style : 'padding: 0;',
						items : [{
									xtype : 'toolbar',
									title : 'Arpav',
									items : [{
												xtype : 'spacer'
											}, {
												text : 'Chiudi',
												iconCls : 'delete_black1',
												handler : function() {
													me.popup.hide();
													if (callback && callbackObj)
														callback.apply(callbackObj);
												}
											}]
								}, messagePanel]
					});
			Ext.Viewport.add(this.popup);
			this.popup.show();
		}
	},

	objToString : function(obj) {
		var str = '';
		for (var p in obj) {
			if (obj.hasOwnProperty(p)) {
				str += p + ':' + obj[p] + '\n';
			}
		}
		return str;
	},
	
	/*
	 * input: store
	 * output: simple array with first level objects (id only)  
	 */
	getFirstLevelObjs : function(store, idField) {
		var data = [];
		store.each(function(item) {
			var entry = {};
			if(idField)
				entry.id = eval("item.getData()."+idField);
			else
				entry.id = item.getData().id;
			data.push(entry);
		});
		return data;
	},
	
	/* */
	openExternalLink : function(url) {
		if ((Ext.os.deviceType == "Phone") || (Ext.os.deviceType === "Tablet")) {
			navigator.app.loadUrl(url, {openExternal: true});
		} else {
			window.open("yoururl", '_blank');
		}
	}

}, function() {
	arpavutil = this;
});