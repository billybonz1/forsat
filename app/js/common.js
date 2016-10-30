$(function() {

	// Custom JS\
        $('#header-slider').lightSlider({
            adaptiveHeight:true,
            item:1,
            slideMargin:0,
            loop:true
        });
});
$(document).ready(function() {
    var sliderOverall = $('#slider-overall').lightSlider({
        item:6,
        loop:false,
        slideMove:2,
        slideMargin: 20,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        controls:false,
        pager: false,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                }
            }
        ]
    });
    $('.slider-overall__buttons__a-left').on("click",function (e) {
        e.preventDefault();
        sliderOverall.goToPrevSlide();
    });
    $('.slider-overall__buttons__a-right').on("click",function (e) {
        e.preventDefault();
        sliderOverall.goToNextSlide();
    });
});