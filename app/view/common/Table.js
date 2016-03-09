Ext.define('ArpavNeveValanghe.view.common.Table', {
    extend: 'Ext.Container',
	
    xtype : 'arpavtable',
    
    config: {
        tpl: Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<tpl if="title"><h3>{title}</h3></tpl>',
                '<tpl if="description"><p class="tabledescription">{description}</p></tpl>',
                '<table  class="{cssclass}">',
                	'<tpl if="headers">',
                	'<tr>',
                		'<tpl for="headers">',
                        '<th class="{cssclass}">{html}</th>',
                        '</tpl>',
                	'</tr>',
                	'</tpl>',
                    '<tpl for="rows">',
                    '<tr>',
                        '<tpl for="columns">',
                        '<td class="{cssclass}"<tpl if="colspan">colspan="{colspan}"</tpl>>{html}</td>',
                        '</tpl>',
                    '</tr>',
                    '</tpl>',
                '</table>',
            '</tpl>'
        )
    }
});