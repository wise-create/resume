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
        autoplaySpeed: 4500,
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
        nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
        responsive: [{
            breakpoint: 701,
            settings: {
                arrows: false,
                fade: true
            }
        }]
    })

    // toggle메서드를 사용하기 위해서는 jquery-migrate-1.4.1.min.js을 연결해야함
    $('.plpa').toggle(
        function(){
            $(this).find('i').removeClass('fa-pause').addClass('fa-play')
            $('.slide-inner').slick('slickPause')
        },
        function(){
            $(this).find('i').removeClass('fa-play').addClass('fa-pause')
            $('.slide-inner').slick('slickPlay')
        }
    )




})(jQuery)