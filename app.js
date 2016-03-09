/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.Loader.setConfig({
			enabled : true,
			disableCaching : false
		});

Ext.require(['ArpavNeveValanghe.util.AppBus', 'ArpavNeveValanghe.util.AppConfig', 'ArpavNeveValanghe.util.AppLogger', 'ArpavNeveValanghe.util.AppUtil']);

Ext.application({
    name: 'ArpavNeveValanghe',

    requires: [
        'Ext.MessageBox'
    ],
    
    models : [
    	'Dato', 'Sensore', 'Stazione', 'Area', 'Scadenza', 'Bollettino' 
    ],
    
    views: [
        'Main', 'MainNavigationView', 'Info', 'common.Banner', 'common.Actions', 'common.DateSelect', 'common.Table', 'home.Map', 'home.Main', 
        'legenda.Main', 'legenda.List', 'legenda.Detail',  
        'zone.Main', 'zone.List', 'zone.Detail',
        'stazioni.Main', 'stazioni.Map', 'stazioni.Detail', 'stazioni.Chart', 'stazioni.List', 'stazioni.ListPanel'
    ],
    
    controllers: [
    	'Main', 'MainNavigationView', 'home.Main', 'home.Map',
    	'zone.Detail',
    	'stazioni.Map', 'stazioni.Detail'
	],

    stores : [
    	'Bollettino', 'Stazione', 'Sensore'
    ],

    icon: {
        "57":"resources/icons/icon57x57.png",
		"72":"resources/icons/icon72x72.png",
		"114":"resources/icons/icon114x114.png",
		"144":"resources/icons/icon144x144.png"
    },

    isIconPrecomposed: true,
	
    /*startupImage: {
        '320x460': 'resources/startup/splash.png',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },*/
    
    launch: function() {
    	if (Ext.os.deviceType !== "Desktop" && Ext.os.name !== "Windows") {
			Ext.Function.createDelayed(function() {
						// Remove the splash screen
						navigator.splashscreen.hide();
					}, 1000, this)();
		}
        
        // Init Ajax
		this.getApplication().getController('Main').initAjax();
		
		// Enable bus logging
		arpavbus.enableLogging();
		
		// Init logger
		Ext.Logger = Ext.Logger || arpavlogger;

        // Initialize the main view
        Ext.Viewport.add(Ext.create('ArpavNeveValanghe.view.Main'));
        
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
