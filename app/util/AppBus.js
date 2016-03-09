Ext.define("ArpavNeveValanghe.util.AppBus", {
			singleton : true,
			extend : "Ext.util.Observable",
			
			enableLogging : function() {
				ArpavNeveValanghe.util.AppBus.fireEvent = Ext.Function.createInterceptor(ArpavNeveValanghe.util.AppBus.fireEvent,function() {
					if(arpavutil.hasConsole())
						console.log(this.$className, arguments);
					return true;
				});
			}

		}, function() {
			arpavbus = this;
		});
