define([
    'email-collection/email-collection',
    'jquery',
    'mustache',
    'text!email/email.html'
], function (Collection, $, Mustache, emailTemplate) {
    'use strict';

    var EmailContent = {
        options: {
            'holder': '.message-block',
            'backBtn': '.back',
            'emailHolder': '.email-content',
            'favoriteBtn': '.top-panel .favorite',
            "starFill": 'icon_star',
            "starEmpty": 'icon_star_alt',
            'markBtn': '.top-panel .check',
            'markCheck': 'icon_box-checked',
            'markUncheck': 'icon_box-empty'
        },
        init: function(){
            this.render(Collection.getEmail(0));
            this.events();
        },
        render: function(data){
            var html = Mustache.to_html(emailTemplate, data);
            $(this.options.holder).html(html);
        },
        events: function(){
            var self = this;
            $(document).on('openEmail', function(event, email) {
                this.render(email);
            }.bind(this));

            $(this.options.favoriteBtn).bind('click', function(){
                $(this).toggleClass(self.options.starFill).toggleClass(self.options.starEmpty);
            });

            $(this.options.markBtn).bind('click',function() {
                $(this).toggleClass(self.options.markUncheck).toggleClass(self.options.markCheck);
            });

            if(device.iphone()){
                $(this.options.backBtn).hammer().bind('tap', function () {
                    $(this.options.emailHolder).animate({right: '-50em'}, 500);
                }.bind(this))
            }
        }
    };
    return EmailContent;
});




