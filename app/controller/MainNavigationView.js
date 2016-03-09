Ext.define("ArpavNeveValanghe.controller.MainNavigationView", {

			extend : "Ext.app.Controller",

			config : {
				refs : {
					NavigationView : "arpavmainnv"
				},

				control : {
					NavigationView : {
						initialize : 'onInit',
						back : 'onBack'
					}
				}
			},
			
			onInit : function(panel) {
				arpavbus.on('showlegenda', this.showLegenda, this);
				arpavbus.on('showlegendadetail', this.showLegendaDetail, this);
				arpavbus.on('showinfo', this.showInfo, this);
				arpavbus.on('showzone', this.showZone, this);
				arpavbus.on('showzona', this.showZona, this);
				arpavbus.on('showstazioni', this.showStazioni, this);
				arpavbus.on('showstazionilist', this.showStazioniList, this);
				arpavbus.on('showstazione', this.showStazione, this);
				arpavbus.on('showhome', this.showHome, this);
				
				var navbar = panel.getNavigationBar();
				// modify back button
				navbar.getBackButton().setConfig({
                        iconMask: true,
                        iconCls: 'left',
                        ui: 'plain'
                });
                
                // add home button
                navbar.homeButton = navbar.add({
	                xtype: 'button',
	                iconCls : 'home',
	                hidden: true,
	                align: 'right',
	                ui: 'plain'
	            });
				// add tab event listener
	            navbar.homeButton.on({
	                tap: function() {
	                	arpavbus.fireEvent("showhome");
	                }
	            });
	            
	            panel.onBefore("activeitemchange", this.onBeforeActiveItemChange);
	            panel.onAfter("activeitemchange", this.onAfterActiveItemChange);
			},
			
			/*
			 * reset currentDate according to previous panel
			 */
			onBack : function(navigationView) {			
				var dateSelectField = this.getDateField(navigationView);
				if(dateSelectField) {
					dateSelectField.restoreDate();
				}
			},
						
			/*
			 * search for date select field
			 */
			getDateField : function(navigationView) {
				var currentView = navigationView.getActiveItem();
				var dateSelectField = currentView.down("#arpavdateselect");
				return dateSelectField;
			},
			
			showLegenda : function() {
				this.getNavigationView().push({
							xtype : 'arpavlegendamain'
						});
			},
			
			showLegendaDetail : function(tipo) {
				this.getNavigationView().push({
							xtype : 'arpavlegendadetail',
							tipo : tipo
						});
			},

			showInfo : function() {
				this.getNavigationView().push({
							xtype : 'arpavinfo'
						});
			},

			showZone : function() {
				this.getNavigationView().push({
							xtype : 'arpavzonemain'
						});
			},

			showZona : function(zona) {
				this.getNavigationView().push({
							xtype : 'arpavzonadetail',
							zona : zona
						});
			},
			
			showStazioni : function(zona) {
				this.getNavigationView().push({
							xtype : 'arpavstazionipanel',
							zona : zona
						});
			},
			
			showStazioniList : function(zona) {
				this.getNavigationView().push({
							xtype : 'arpavstazionilistpanel',
							zona : zona
						});
			},
			
			showStazione : function(zona, stazione) { 
				this.getNavigationView().push({
							xtype : 'arpavstazionedetail',
							zona : zona,
							stazione : stazione
						});
			},
			
			onBeforeActiveItemChange : function(panel) {
				var navbar = panel.getNavigationBar();
				navbar.homeButton.hide();
			},
			
			onAfterActiveItemChange : function(panel) {
				var navbar = panel.getNavigationBar();
				if (navbar.backButtonStack && navbar.backButtonStack.length > 1){
					navbar.homeButton.show();
				}
			},
			
			showHome : function() {
				// reset navigation view
				var navigationView = this.getNavigationView();
				navigationView.reset();
				
				// reset to today date
				var dateSelectField = this.getDateField(navigationView);
				if(dateSelectField) {
					dateSelectField.setTodayDate();
				}
				
			}
		});