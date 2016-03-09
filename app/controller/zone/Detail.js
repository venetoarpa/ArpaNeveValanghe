Ext.define("ArpavNeveValanghe.controller.zone.Detail", {
			extend : "Ext.app.Controller",

			config : {
				refs : {
					Panel : "arpavzonadetail"
				},

				control : {
					Panel : {
						initialize : 'onInitialize'
					}
				}
			},

			onInitialize : function() {
				var panel = this.getPanel();
				// add datachange bus listener
				arpavbus.on('datechange', this.onDateChanged, panel);
				// load data
				panel.loadData();
				data = panel.getData();
				// set title to panel
				panel.config.title = data["nome"];
				panel.tablecontainer = panel.add({
							xtype : "panel",
							bodyPadding : arpavconfig.config.bodyPadding,
							scrollable : true,
							items : []
						});
				// add table panel
				panel.addTable(panel);
			},
			
			onDateChanged : function() {
				// this is referred to panel
				var panel = this;
				panel.loadData();
				panel.addTable();
			}
		});