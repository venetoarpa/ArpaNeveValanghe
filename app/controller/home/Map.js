Ext.define("ArpavNeveValanghe.controller.home.Map", {
	extend : "Ext.app.Controller",

	config : {
		refs : {
			MapBollettino : "arpavhomemap"
		},

		control : {
			MapBollettino : {
				maprender : 'onMapRender',
				initialize : 'onInit'
			}
		}
	},
	
	onInit : function() {
		this.addKml();
		arpavbus.on('datechange', this.onDateChanged, this);
	},
	
	addKml : function() {
		var kmlLayer = new google.maps.KmlLayer(arpavconfig.config.map.kmlUrl, { suppressInfoWindows: true });
		var gMap = this.getMapBollettino().getMap();
		kmlLayer.setMap(gMap);
		google.maps.event.addListener(kmlLayer, 'click', function(response) {
			arpavbus.fireEvent('showzona', response.featureData.name);
		});
	},

	onMapRender : function(comp, gMap) {
		var bollettino = Ext.getStore("BollettinoStore").getBollettino();
		var scadenza = bollettino.getScadenza(arpavconfig.config.currentDate);
		var aree = scadenza.aree();
		
		this.removeAllMarkers();
		this.addMarkers(aree);
	},
	
	removeAllMarkers : function() {
		var mappabolletino = this.getMapBollettino();
		for (var i = 0; i < mappabolletino.config.markers.length; ++i) {
			var marker = mappabolletino.config.markers[i];
			marker.setMap(null);
		}
		mappabolletino.config.markers = [];
	},

	addMarkers : function(aree) {
		var mappabolletino = this.getMapBollettino();
		// add areas markers
		aree.each(function(area) {
					var image = {
						url : "http://" + area.get("icon_danger"),
						scaledSize : new google.maps.Size(80, 80),
						origin : new google.maps.Point(0, 0),
						anchor : new google.maps.Point(40, 40)
					};

					var newMarker = new google.maps.Marker({
								map : mappabolletino.getMap(),
								position : area.get("markerposition"),
								icon : image, 
								area : area.getId()
							});
							
					google.maps.event.addListener(newMarker, 'click', function() {
						arpavbus.fireEvent('showzona', this.area);
					});
					
					mappabolletino.config.markers.push(newMarker);
				});

	},

	onDateChanged : function() {
		this.getMapBollettino().config.date = arpavconfig.config.currentDate;
		this.onMapRender();
	}

});