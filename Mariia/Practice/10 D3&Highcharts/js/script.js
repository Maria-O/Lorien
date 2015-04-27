/**
 * Created by Mariia_Obizna on 4/25/2015.
 */
var menuBtn = $("#menu-btn"),
    asideNav = $("#aside-nav"),
    asideNavItem = asideNav.find('.aside-nav-list').find('li'),
    topNavItem =$(".top-nav-item");

menuBtn.on('click', function () {
    asideNav.toggleClass('hide');
});

asideNavItem.on('click', function() {
    asideNavItem.removeClass('active');
    $(this).addClass('active');
});

topNavItem.on('click', function(){
    topNavItem.removeClass('active');
    $(this).addClass('active');
});