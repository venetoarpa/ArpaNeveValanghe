Ext.define("ArpavNeveValanghe.controller.Main", {
			extend : "Ext.app.Controller",

			config : {
				refs : {
					Main : "arpavmain"
				}
			},
			
			initAjax : function() {
				var me = this;
				Ext.Ajax.on('beforerequest', function(conn, response, options) {
						arpavutil.mask();
						var message = Ext.String.format("Ajax request: {0} {1}", response.method, response.url);
						arpavlogger.info(message);
					}, this);

				Ext.Ajax.on('requestcomplete', function(conn, response, options) {
						arpavutil.unmask();
					}, this);

				Ext.Ajax.on('requestexception', function(conn, response, options) {
						var message = Ext.String.format("{0} {1} {2}", response.status, response.statusText, options?options.url:"");
						arpavlogger.info(message);
						arpavutil.unmask();
					}, this);
			}
		});