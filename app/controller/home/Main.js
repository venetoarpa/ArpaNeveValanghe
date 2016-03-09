Ext.define("ArpavNeveValanghe.controller.home.Main", {

			extend : "Ext.app.Controller",

			config : {
				refs : {
					HomePanel : "arpavhomepanel"
				},

				control : {
					HomePanel : {
						activate : "onActivate",
						deactivate : "onDeactivate"
					}
				}
			},

			onActivate : function(newActiveItem, panel, oldActiveItem) {
				newActiveItem.arpavhomemap = Ext.create("ArpavNeveValanghe.view.home.Map");
				newActiveItem.add(newActiveItem.arpavhomemap);
			},

			onDeactivate : function(oldActiveItem, panel, newActiveItem) {
				oldActiveItem.remove(oldActiveItem.arpavhomemap);
				delete oldActiveItem.arpavhomemap;
			}
		});