require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'libs/jquery',
        'hammer': 'libs/hammer',
        'hammerJQ': 'libs/jqueryHammer',
        'mustache': 'libs/mustache',
        'text': 'libs/text',
        'device': 'libs/device'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'hammer': {
            deps: ['jquery']
        },
        'hammerJQ': {
            deps: ['jquery']
        }
    }
});

define([
    'email-collection/email-collection',
    'email-preview/email-preview',
    'email/email',
    'aside-menu',
    'jquery',
    'hammerJQ',
    'device'
], function(Collection, EmailPreview, Email, Menu, $){
    'use strict';

    $(function () {
        Collection.init().then(function(){
            Menu.init();
            EmailPreview.init();
            Email.init();
        });
    });
});