$(document).ready(function(){
    
    $('.ui-loader').remove();

    $(".btn-holder").find('button').bind( "tap", function(){
        $(".btn-holder").find('button').removeClass('active');
        $(this).addClass('active');
    });

    $("#menu").bind('tap', function(){
        $('.dropdown').slideToggle();
    });

    $('.status').bind('tap', function(){
        var controlButtons=$("<div class='ctrl-btn'><span class='entypo-pause active' data-text='pause'></span><span class='entypo-heart-empty active' data-text='heart-empty'></span>" +
        "<span class='entypo-install active' data-text='install'></span></div>");
        if($(this).hasClass('rotate')) {
            $('.songs-list').removeClass('running');
            $(this).removeClass('rotate');
            $('.ctrl-btn').remove();
        }
        else {
            $('.status').removeClass('rotate');
            $(this).toggleClass('rotate');
            $('.songs-list').addClass('running');
            $('.ctrl-btn').remove();
            $(this).closest('.song').after(controlButtons);
            controlButtons.css('opacity',0.9);
            $('.ctrl-btn').find('.entypo-pause').bind('tap', function(){
                $(this).toggleClass('paused');
            });
            $('.ctrl-btn').find('.entypo-heart-empty').bind('tap', function(){
                $(this).toggleClass('liked');
            });
             $('.ctrl-btn').find('.entypo-install').bind('tap', function(){
                $(this).toggleClass('downloaded');
            });         
        }
    });
});