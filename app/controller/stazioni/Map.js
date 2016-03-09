Ext.define("ArpavNeveValanghe.controller.stazioni.Map", {
	extend : "Ext.app.Controller",

	config : {
		refs : {
			Map : "arpavstazionimap"
		},

		control : {
			Map : {
				maprender : 'onMapRender'
			}
		}
	},

	onMapRender : function(component, gMap) {
		var me = this;		
		var bollettino = null, scadenza = null, zone = null, zona = null, stazioni = null;
		
		// get bollettino
		var store = Ext.getStore("BollettinoStore");
		if (store.getData().length > 0) {
			bollettino = store.getData().get(0);
		} else {
			return;
		}
		
		// get scadenza
		if (bollettino.scadenze().data.items.length > 0) {
			scadenza = bollettino.scadenze().data.items[0];
		} else {
			return;
		}
		
		// get zona
		zone = scadenza.aree().data.items;
		for (var i = 0; i < zone.length; ++i) {
			if (zone[i].get("nome") == component.config.zona) {
				zona = zone[i];
			}
		}
		if (!zona) {
			return;
		}
			
		// init bounds
		var mapBounds = new google.maps.LatLngBounds();
		
		// get stazioni
		stazioni = zona.stazioni().data.items;
		for (var i = 0; i < stazioni.length; ++i) {
			var stazione = stazioni[i];

			var pos = new google.maps.LatLng(stazione.get("latitudine"), stazione.get("longitudine"));
			
			// extend bounds
			mapBounds.extend(pos);
			
			// create marker
			var marker = new google.maps.Marker({
						map : gMap,
						position : pos,
						title : stazione.get("nome"),
						idstaz : stazione.get("idstaz")
					});
			
			// add click event listener
			google.maps.event.addListener(marker, 'click', function() {
					component.infowindow.setContent(me.infoWindowContent(this.getTitle(), zona.get("nome")));
					component.infowindow.open(gMap, this);
			});
			
			// push marker
			component.config.markers.push(marker);
		}
		
		// set map center
		setTimeout(function() {
		    gMap.fitBounds(mapBounds);
			gMap.panToBounds(mapBounds);
		}, 100);
		
	},
	
	infoWindowContent : function(title, zona) {
		var text = "<a href='#' onclick='arpavbus.fireEvent(\"showstazione\", \""+ zona +"\", \""+ title +"\"); return false;'>";
		text += '<b>' + title + '</b><br>Vedi dati stazione' ;
		text += '</a>';
		return text;
	}
});