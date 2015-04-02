define([
    'email-collection/email-collection',
    'mustache',
    'text!email-preview/email-preview.html'
], function (Collection, Mustache, emailTemplate) {
    'use strict';

    var EmailPreview = {
        options: {
            'holder': '.preview-list',
            'email': '.email',
            'asideMenu': '.aside-menu',
            'menuBtn': '.menu',
            'emailContent': '.email-content',
            'emailsPreview': '.emails-preview',
            'backBtn': '.back'
        },
        init: function(){
            this.render();
            this.events();
        },
        render: function(){
            this.options.html = Mustache.to_html(emailTemplate, Collection.getCollection());
            $(this.options.holder).append(this.options.html);
            this.setActive();
        },
        setActive: function(){
            $(this.options.holder).children().first().addClass('active');
        },
        events: function(){
            var self = this;
            //handler for emails tap
            $(this.options.email).bind('click', function(){
                $(self.options.holder).children().removeClass('active');
                $(this).addClass('active');
                var id = $(this).index();
                $(document).trigger('openEmail', Collection.getEmail(id));
            });

            $(this.options.menuBtn).bind('click', function(){
                $(this.options.asideMenu).animate({width: 'toggle'});
            }.bind(this));

            if(device.iphone()){
                $(this.options.email).hammer().bind('tap', function(){
                    $(this.options.backBtn).show();
                    $(this.options.emailContent).animate({right: 0}, 600);
                }.bind(this));
            }
        }
    };
    return EmailPreview;
});




