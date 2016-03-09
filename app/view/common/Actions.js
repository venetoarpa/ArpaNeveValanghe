(function() {

	var legendtaplistener = {
		tap : function(button) {
			var popup = new Ext.Panel({
						centered : true,
						modal : true,
						hideOnMaskTap : true,
						styleHtmlContent : true,
						html : button.config.legend
					});
			popup.showBy(button);
		}
	};

	Ext.define("ArpavNeveValanghe.view.common.Actions", {
		extend : "Ext.Panel",
		xtype : "arpavactions",

		config : {
			layout : "vbox"
			// cls : 'x-toolbar'
		},

		initialize : function() {

			if (this.config.showDate) {
				this.showDateFn();
			}

			if (this.config.showLegend) {
				this.showLengendFn();
			}

			if (this.config.showZoneButton) {
				this.showZoneButtonFn();
			}


			if (this.config.showStazioniButton) {
				this.showStazioniButtonFn(this.config.showStazioniButton.nomeZona);
			}

			if (this.config.showStazioniListButton) {
				this.showStazioniListButtonFn(this.config.showStazioniListButton.nomeZona);
			}

			if (this.config.showLegendaButton) {
				this.showLegendaButtonFn();
			}

			if (this.config.showInfoButton) {
				this.showInfoButtonFn();
			}
		},

		showDateFn : function() {
			this.add({
						xtype : 'arpavdateselect'
					});
		},

		showLengendFn : function() {
			this.add({
				xtype : 'container',
				layout : 'hbox',
				items : [{
					xtype : 'button',
					id : 'legendButton5',
					cls : 'no-border-radius',
					html : '<img style="width:2.2em" src="img/A_05_04.png"/>',
					action : 'legend',
					flex : 1,
					listeners : legendtaplistener,
					legend : "Molto forte - Forte"
				}, {
					xtype : 'button',
					id : 'legendButton4',
					cls : 'no-border-radius',
					html : '<img style="width:2.2em" src="img/A_03_03.png"/>',
					action : 'legend',
					flex : 1,
					listeners : legendtaplistener,
					legend : "Marcato"
				}, {
					xtype : 'button',
					id : 'legendButton3',
					cls : 'no-border-radius',
					html : '<img style="width:2.2em" src="img/A_02_02.png"/>',
					action : 'legend',
					flex : 1,
					listeners : legendtaplistener,
					legend : "Moderato"
				}, {
					xtype : 'button',
					id : 'legendButton2',
					cls : 'no-border-radius',
					html : '<img style="width:2.2em" src="img/A_01_01.png"/>',
					action : 'legend',
					flex : 1,
					listeners : legendtaplistener,
					legend : "Debole"
				}, {
					xtype : 'button',
					id : 'legendButton1',
					cls : 'no-border-radius',
					html : '<img style="width:2.2em" src="img/A_00_01.png"/>',
					action : 'legend',
					flex : 1,
					listeners : legendtaplistener,
					legend : "Manto nevoso assente o con copertura discontinua fino in quota. Chiazze di neve o neve nei soli canaloni."
				}]
			});
		},

		showZoneButtonFn : function() {
			var bc = this.getButtonContainer();
			bc.add({
						xtype : 'button',
						cls : 'no-border-radius',
						// iconCls : 'list',
						text : 'Zone',
						ui : 'action',
						action : 'zone',
						flex : 1,
						listeners : {
							tap : function() {
								arpavbus.fireEvent('showzone');
							}
						}
					});
		},

		showInfoButtonFn : function() {
			var bc = this.getButtonContainer();
			bc.add({
						xtype : 'button',
						cls : 'no-border-radius',
						// iconCls : 'info',
						text : 'Info',
						ui : 'action',
						action : 'info',
						flex : 1,
						listeners : {
							tap : function() {
								arpavbus.fireEvent('showinfo');
							}
						}
					});
		},

		showStazioniButtonFn : function(nomeZona) {
			var bc = this.getButtonContainer();
			bc.add({
						xtype : 'button',
						cls : 'no-border-radius',
						//iconCls : 'list',
						text : 'Stazioni',
						ui : 'action',
						action : 'stazioni',
						flex : 1,
						listeners : {
							tap : function() {
								arpavbus.fireEvent('showstazioni', nomeZona);
							}
						}
					});
		},

		showStazioniListButtonFn : function(nomeZona) {
			var bc = this.getButtonContainer();
			bc.add({
						xtype : 'button',
						cls : 'no-border-radius',
						// iconCls : 'list',
						text : 'Elenco stazioni',
						ui : 'action',
						action : 'elencostazioni',
						flex : 1,
						listeners : {
							tap : function() {
								arpavbus.fireEvent('showstazionilist', nomeZona);
							}
						}
					});
		},
		
		showLegendaButtonFn : function() {
			var bc = this.getButtonContainer();
			bc.add({
						xtype : 'button',
						cls : 'no-border-radius',
						// iconCls : 'action',
						text : 'Legenda',
						ui : 'action',
						action : 'legenda',
						flex : 1,
						listeners : {
							tap : function() {
								arpavbus.fireEvent('showlegenda');
							}
						}
					});
		},

		getButtonContainer : function() {
			var bc = 'buttonContainer';
			if (!this.down('#' + bc)) {
				this.add({
							xtype : 'container',
							layout : 'hbox',
							itemId : bc
						});
			}
			return this.down('#' + bc);
		}
	});
})();