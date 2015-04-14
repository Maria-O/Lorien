$(window).bind('scroll',function(e){
    parallaxScroll();
});

$('.next').bind('click', function(e){
    $('body').animate({"scrollTop": "+=780px"}, '500');
    return false;
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.layer-2').css('top',(0-(scrolled*0.75))+'px');
    $('.layer-1').css('top',(0-(scrolled*0.5))+'px');
    $('.layer-0').css('top',(0-(scrolled*0.25))+'px');
}