$(function () {
    $('#header-slider').lightSlider({
        adaptiveHeight: true,
        item: 1,
        slideMargin: 0,
        loop: true
    });
    var sliderOverall = $('#slider-overall').lightSlider({
        item: 6,
        loop: false,
        slideMove: 2,
        slideMargin: 20,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        controls: false,
        pager: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });
    $('.slider-overall__buttons__a-left').on("click", function (e) {
        e.preventDefault();
        sliderOverall.goToPrevSlide();
    });
    $('.slider-overall__buttons__a-right').on("click", function (e) {
        e.preventDefault();
        sliderOverall.goToNextSlide();
    });

    $(".news__content__item").on("click", function (e) {
        $(this).toggleClass('active');
        $(this).find(".icon-plus,.icon-minus").toggleClass("icon-plus icon-minus");
    });

    $(".news__content__item a").on("click", function(e){
         e.stopPropagation();
    });
    
    
    var swiper_slider = new Swiper('.slider_wrapper', {
        prevButton: '.slider_nav.prev',
        nextButton: '.slider_nav.next',
        slidesPerView: 9,
        centeredSlides: true,
        effect: 'coverflow',
        slidesOffsetBefore: 0,
        speed: 800,
        coverflow: {
            rotate: 0,
            stretch: -10,
            depth: 100,
            modifier: 3,
            slideShadows: false
        },
        breakpoints: {
            320: {slidesPerView: 3},
            640: {slidesPerView: 5},
            1024: {slidesPerView: 7}
        },
        simulateTouch: true
    });

    var nb_slides = swiper_slider.params.slidesPerView;
    // swiper_slider.slideTo(Math.floor(nb_slides / 2));
    swiper_slider.slideTo(1);
    $('.swiper-wrapper a:not(.swiper-slide-active)').on('click', function (e) {
        e.preventDefault();
        console.log($(this).index());
        swiper_slider.slideTo($(this).index());
        return false;
    });
});