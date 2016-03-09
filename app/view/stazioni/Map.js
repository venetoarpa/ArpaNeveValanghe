Ext.define("ArpavNeveValanghe.view.stazioni.Map", {
			extend : "Ext.Map",
			xtype : 'arpavstazionimap',
			id : 'arpavstazionimap',

			config : {
				mapOptions : {
					center : new google.maps.LatLng(arpavconfig.config.map.center[0], arpavconfig.config.map.center[1]),
					disableDefaultUI : true,
					disableDoubleClickZoom : true,
					draggable : false,
					scrollwheel : false,
					panControl : false
				},
				markers : [],
				zona : null
			},

			initialize : function() {
				this.infowindow = new google.maps.InfoWindow();
				this.callParent(arguments);
			}
		});