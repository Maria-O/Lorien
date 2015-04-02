$(function(){
    console.log('--');
    $('.latest-work-list').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: '.arrow-right',
        prevArrow: '.arrow-left',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    $('.home-gallery').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});