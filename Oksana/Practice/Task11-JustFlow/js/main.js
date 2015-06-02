'use strict';

function toggleMenu (){
 $('.menu-icon').on('click', function(){
    $('.main-nav').toggleClass('hide-main-nav');
 });
}

(function (){
    var s = skrollr.init({
        'smoothScrolling': true,
        'forceHeight': false
    });

    // Off parallax for mobile
    if (s.isMobile()){
        s.destroy();
    }

    toggleMenu();
})();