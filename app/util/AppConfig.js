Ext.define("ArpavNeveValanghe.util.AppConfig", {
			singleton : true,

			config : {
				xmlPrevisioniUrl : "http://www.arpa.veneto.it/neve_valanghe/it/xml/dolomiti_nevevalanghe.xml",
				xmlStazioniUrl : "http://www.arpa.veneto.it/neve_valanghe/it/xml/stazioni_neve.xml",
				bodyPadding : 15,
				map : {
					kmlUrl : "http://www.arpa.veneto.it/neve_valanghe/it/xml/Zone_App_Neve_GEO.kml",
					center : [46.08944584306235, 11.6893634999999],
					zoom : 8,
					positions : {
						d_settentrionali : [46.49851042585751, 12.381591796875],
						d_meridionali : [46.33187652940555, 12.06298828125],
						p_bellunesi : [46.03522844966799, 12.10693359375],
						p_vicentine : [45.76764270808123, 11.414794921875],
						p_veronesi : [45.5910983738063, 10.96435546875]
					}
				},
				currentDate : null,
				noScrollBounce : {
					direction : 'vertical',
					momentumEasing : {
						momentum : {
							acceleration : 30,
							friction : 0.5
						},
						bounce : {
							acceleration : 0.0001,
							springTension : 0.9999
						},
						minVelocity : 5
					},
					outOfBoundRestrictFactor : 0
				}
			}
		}, function() {
			arpavconfig = this;
		});
