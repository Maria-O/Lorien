$(document).ready(function(){

   //toggle menu
    $('.current-category').on('click', function(){
        $('nav.menu').slideToggle('slow');
        $('.current-category .fa').toggleClass("fa-caret-up").toggleClass("fa-caret-down");
    });
});