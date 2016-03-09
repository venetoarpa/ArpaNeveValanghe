Ext.define("ArpavNeveValanghe.view.Info", {
	extend : "Ext.Panel",
	xtype : 'arpavinfo',

	config : {
		title : 'Info',
		styleHtmlContent : true,
		scrollable : true,
		html : '<p>Le informazioni presentate sono ricavate dal Bollettino Dolomiti Neve e Valanghe.</p>'
				+ '<p>Il bollettino viene emesso durante la stagione invernale, normalmente da novembre ad aprile, '
				+ 'con aggiornamenti bisettimanali il lunedì e il giovedì in caso di situazioni ordinarie, più frequenti, '
				+ 'anche giornalieri, in caso di fenomeni nivometeorologici rilevanti che determinano particolari situazioni di criticità.</p>'
				+ '<p>Per maggiori informazioni consulta il bollettino nella versione integrale sul sito ARPAV '
				+ '<a onclick="arpavutil.openExternalLink(\'http://www.arpa.veneto.it/neve_valanghe/it/html/index.php\'); return false;">Bollettino Dolomiti Neve e Valanghe</a>.</p>'
				+ '<p>Altre informazioni sulla neve e le valanghe alla pagina '
				+ '<a onclick="arpavutil.openExternalLink(\'http://www.arpa.veneto.it/temi-ambientali/neve/dati\'); return false;">Neve</a>.</p>'
	}
});
