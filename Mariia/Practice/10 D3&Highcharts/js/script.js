/**
 * Created by Mariia_Obizna on 4/25/2015.
 */
var menuBtn = $("#menu-btn"),
    asideNav = $("#aside-nav"),
    asideNavItem = asideNav.find('.aside-nav-list').find('li'),
    topNavItem = $(".top-nav-list").find('.btn');

menuBtn.on('click', function(){
    asideNav.toggleClass('move');

});

asideNavItem.on('click', function() {
    asideNavItem.filter('.active').removeClass('active');
    $(this).addClass('active');
});

topNavItem.on('click', function(){
    topNavItem.filter('.active').removeClass('active');
    $(this).addClass('active');
});