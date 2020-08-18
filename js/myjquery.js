(function($){

    function openNav(){
        $('#header').toggleClass('on')
        if ( $('#header').hasClass('on') ) {
            $('.nav').css({
                display: 'block'
            }).animate({
                right: 0
            }, 500)
        } else {
            $('.nav').animate({
                right: '-320px'
            }, 500, function(){
                $(this).css({
                    display: 'none'
                })
            })
        }
        $('.outlayer').toggleClass('on')
    }
    $('.open-gnb').on('click', openNav)
    $('.outlayer').on('click', openNav)

    /* $(window).resize(function(){
        var winWidth = $(this).innerWidth()
        if ( winWidth > 700 ) {
            $('#header').removeClass('on')
            $('.nav').css({
                display: 'block',
                right: 0
            })
        } else if ( winWidth <= 700 ) {
            $('#header').removeClass('on')
            $('.nav').css({
                display: 'none',
                right: '-320px'
            })
        }
    }) */

    function init(){
        var winWidth = $(this).innerWidth()
        if ( winWidth > 700 && !$('html').hasClass('pc') ) {
            $('#header').removeClass('on')
            $('.outlayer').removeClass('on')
            $('.nav').css({
                display: 'block',
                right: '0px'
            })
            $('html').addClass('pc').removeClass('mobile')
        } else if ( winWidth <= 700 && !$('html').hasClass('mobile') ) {
            $('#header').removeClass('on')
            $('.nav').css({
                display: 'none',
                right: '-320px'
            })
            $('html').addClass('mobile').removeClass('pc')
        }
    }
    init()

    $(window).resize(function(){
        init()
    })

    // 메인슬라이드 : 슬릭슬라이드 연결
    $('.slide-inner').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 600,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        cssEase: 'linear',
        draggable: true,
        fade: false,
        arrows: true,
        prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>'
    })






})(jQuery)