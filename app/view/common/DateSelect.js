Ext.define("ArpavNeveValanghe.view.common.DateSelect", {
			extend : "Ext.field.Select",
			xtype : 'arpavdateselect',	

			config : {
				itemId : "arpavdateselect",
				label : "Data",
				displayField : 'id',
				valueField : 'id',				
				usePicker : true,
				autoSelect : false,
				zindex : 100
			},			
			
			initialize : function() {
				this.callParent(arguments);
				this.initPicker();
				this.initOptions();
				this.initListeners();
				this.setCurrentDate();
			},
			
			initPicker : function() {
				var picker = this.getPhonePicker();
				picker.setCancelButton("Annulla");
				picker.setDoneButton("Seleziona");
			},
			
			initOptions : function() {
				var store = Ext.getStore("BollettinoStore");
				var scadenzeStore = store.getBollettino().scadenzeStore;
				var options = arpavutil.getFirstLevelObjs(scadenzeStore);
				this.setOptions(options);
			},
			
			initListeners : function() {
				var me = this;
				var listener = {
					change : function(field, value) {
						if(value != arpavconfig.config.currentDate)
							me.setDate(value, true);
					}
				};
				
				this.addListener(listener);
			},
			
			/*
			 * used @ initialization (new panel)
			 */
			setCurrentDate : function() {
				var currentDate = arpavconfig.config.currentDate;
				if(currentDate) {
					this.setDate(currentDate);
				} else {
					this.setTodayDate();
				}
			},
			
			/*
			 * used @ initialization and "home button"
			 */
			setTodayDate : function() {
				var option = this.getOptions()[0]; // get first
				var today = option.id;
				var fire = today != arpavconfig.config.currentDate; // fire event only if different values
				this.setDate(option.id, fire);
			},
			
			/* 
			 * used @ back button
			 */
			restoreDate : function() {
				var oldValue = this.getValue();
				this.setDate(oldValue);
			},
						
			setDate : function(day, fireEvent) {
				if(day) {					
					arpavconfig.config.currentDate = day;
					this.setValue(day);
					if(fireEvent)
						arpavbus.fireEvent('datechange', day);
				}
			}
			
		});