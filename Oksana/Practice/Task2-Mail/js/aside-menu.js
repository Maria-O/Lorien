define(function () {
    'use strict';

    var EmailMenu = {
        options: {
            'carrotBtn': '.menu-header .arrow',
            'menuSection': '.menu-section',
            'menuItems': '.menu-items',
            'carrotRight': 'arrow_carrot-right',
            'carrotDown': 'arrow_carrot-down'
        },
        init: function(){
            this.events();
        },
        events: function(){
            var self = this;
            //handler for menu panels
            $(this.options.carrotBtn).bind('click', function () {
                $(this).parents(self.options.menuSection).find(self.options.menuItems).slideToggle();
                $(this).toggleClass(self.options.carrotRight).toggleClass(self.options.carrotDown);
            });
        }
    };
    return EmailMenu;
});
