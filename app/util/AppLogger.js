Ext.define("ArpavNeveValanghe.util.AppLogger", {
			singleton : true,

			log : function() {
				if (arpavutil.hasConsole() && arguments) {
					for (var i = 0; i < arguments.length; i++) {
						var arg = arguments[i];
						var msg = "";
						for (var j = 0; j < arg.length; j++) {
							msg += arg[j];
						}
						console.log(msg);
					}
				}
			},

			deprecate : function() {
				this.log(arguments);
			},

			error : function() {
				this.log(arguments);
			},

			warn : function() {
				this.log(arguments);
			},

			info : function() {
				this.log(arguments);
			},

			verbose : function() {
				this.log(arguments);
			}

		}, function() {
			arpavlogger = this;
		});
