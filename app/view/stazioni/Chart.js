Ext.define("ArpavNeveValanghe.view.stazioni.Chart", {
			extend : "Ext.chart.CartesianChart",
			requires : [
					'Ext.chart.series.Line', 
					'Ext.chart.axis.Numeric',
					'Ext.chart.axis.Category',
					'Ext.chart.interactions.PanZoom',
					'Ext.chart.interactions.ItemHighlight',
					'Ext.chart.interactions.ItemInfo'
			],
			xtype : "arpavstazionechart",

			config : {
				animate : true,
				store : null, // sensore.datiStore,
				height : 200,
				innerPadding: {top: 15, left: 0, right: 0, bottom: 15}, 
				
				// custom
				legend_size : 12,
				x_legend : "giorno - ora",
				y_legend : null, // sensore.get("unitnm")
				x_field : 'istante',
				y_field : 'vm'
			},

			initialize : function() {
				// set axes
				this.setAxes([{
							type : 'category',
							position : 'bottom',
							fields : this.config.x_field,
							title : {
								text : this.config.x_legend,
								fontSize : this.config.legend_size
							}
						}, {
							type : 'numeric',
							position : 'left',
							fields : this.config.y_field,
							title : {
								text : this.config.y_legend,
								fontSize : this.config.legend_size
							},
							grid : true
						}]);
				this.setSeries([{
							type : 'line',
							highlight : {
								size : 7,
								radius : 7
							},
							style : {
								stroke : 'rgb(143,203,203)'
							},
							xField : this.config.x_field,
							yField : this.config.y_field,
							marker : {
								type : 'path',
								path : ['M', -2, 0, 0, 2, 2, 0, 0, -2, 'Z'],
								stroke : 'blue',
								lineWidth : 0
							}
						}]);

				this.callParent(arguments);
			}
		});