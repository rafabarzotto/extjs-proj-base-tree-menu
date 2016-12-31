Ext.define('ExtMVC.view.Main', {
    extend: 'Ext.container.Container',

    alias: 'widget.main',

    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'ExtMVC.view.Menu'
    ],

    xtype: 'app-main',

    layout: {
        type: 'border',
        padding: '0 5 5 5'
    },

    items: [{
        id: 'app-header',
        xtype: 'box',
        region: 'north',
        height: 40,
        html: 'Ext Portal'
    }, {
        xtype: 'menu',
        width: 200,
        region: 'west',
        split: true,
        width: 200,
        minWidth: 150,
        maxWidth: 250
    }, {
        xtype: 'tabpanel',
        region: 'center',
        itemId: 'mainPanel',
        activeTab: 0,
        items: [{
            xtype: 'panel',
            title: 'Home'
        }]
    }]
});