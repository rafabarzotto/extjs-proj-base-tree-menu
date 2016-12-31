Ext.define('ExtMVC.Application', {
    name: 'ExtMVC',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
        'ExtMVC.view.MyForm'
    ],

    controllers: [
        // TODO: add controllers here
        'ExtMVC.controller.Menu'
    ],

    stores: [
        // TODO: add stores here
    ]
});