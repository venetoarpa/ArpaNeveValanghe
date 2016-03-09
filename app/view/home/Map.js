Ext.define("ArpavNeveValanghe.view.home.Map", {
			extend : "Ext.Map",
			xtype : 'arpavhomemap',

			config : {
				mapOptions : {
					zoom : arpavconfig.config.map.zoom,
					center : new google.maps.LatLng(arpavconfig.config.map.center[0], arpavconfig.config.map.center[1]),
					disableDefaultUI : true,
					disableDoubleClickZoom : true,
					zoomControl : true,
					draggable : true,
					scrollwheel : false,
					panControl : false
				},
				markers : [],
				date : null
			}

		});