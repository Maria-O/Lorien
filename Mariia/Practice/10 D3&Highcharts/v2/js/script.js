/**
 * Created by Mariia_Obizna on 4/25/2015.
 */
var menuBtn = $("#menu-btn"),
    asideNav = $("#aside-nav");

menuBtn.on('click', function () {
    asideNav.toggleClass('hide');
});