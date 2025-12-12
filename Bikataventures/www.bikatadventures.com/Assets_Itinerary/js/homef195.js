var itineraryimageresponsive = function () {
    $('.img-main-slider').each(function () {
        let img = $(this);
        let width = window.innerWidth;
        //if changed, then modify home.css also media queries
        let src = img.attr("data-src-400"); // default
        if (width >= 1601) src = img.attr("data-src-1980");
        else if (width >= 1451) src = img.attr("data-src-1600");
        else if (width >= 1301) src = img.attr("data-src-1450");
        else if (width >= 1151) src = img.attr("data-src-1300");
        else if (width >= 1001) src = img.attr("data-src-1150");
        else if (width >= 851) src = img.attr("data-src-1000");
        else if (width >= 701) src = img.attr("data-src-850");
        else if (width >= 551) src = img.attr("data-src-700");
        else if (width >= 401) src = img.attr("data-src-550");

        img.attr("src", src);

    //    if (window.matchMedia('(min-width: 1601px)').matches) {
    //        if ($(this).attr('src') != $(this).attr("data-src-1980")) {
    //            $(this).attr('src', $(this).attr("data-src-1980"));
    //        }
    //    }
    //    else if (window.matchMedia('(min-width: 1451px)').matches) {
    //        $(this).attr('src', $(this).attr("data-src-1600"))
    //    }
    //    else if (window.matchMedia('(min-width: 1301px)').matches) {
    //        $(this).attr('src', $(this).attr("data-src-1450"))
    //    }
    //    else if (window.matchMedia('(min-width: 1151px)').matches) {
    //        $(this).attr('src', $(this).attr("data-src-1300"))
    //    }
    //    else if (window.matchMedia('(min-width: 1001px)').matches) {
    //        $(this).attr('src', $(this).attr("data-src-1150"))
    //    }
    //    else if (window.matchMedia('(min-width: 851px)').matches) {
    //        $(this).attr('src', $(this).attr("data-src-1000"))
    //    }
    //    else if (window.matchMedia('(min-width: 701px)').matches) {
    //        $(this).attr('src', $(this).attr("data-src-850"))
    //    }
    //    else if (window.matchMedia('(min-width: 551px)').matches) {
    //        $(this).attr('src', $(this).attr("data-src-700"))
    //    }
    //    else if (window.matchMedia('(min-width: 401px)').matches) {
    //        $(this).attr('src', $(this).attr("data-src-550"))
    //    }
    //    else {
    //        $(this).attr('src', $(this).attr("data-src-400"))
    //    }
    });
};

$(window).resize(itineraryimageresponsive);
// Call the function
itineraryimageresponsive();

//should be always in the beginning
$(function () {
    var sliderNavs = "";
    $('.move-nav-text').each(function () {
        sliderNavs += this.outerHTML;
        $(this).remove();
    })
    $('.wrap-move-nav-text').html(sliderNavs);
});

$(document).ready(function () {
    var owl1 = $('.owl-carousel1').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 10000,
        //autoplayHoverPause: true,
        dots: false,
        loop: true,
        center: true,
        margin: 0,
        callbacks: true,
        //URLhashListener: true,
        startPosition: 0,//'URLHash'
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    });

    owl1.on('changed.owl.carousel', function (event) {
        history.pushState("", document.title, window.location.pathname + window.location.search);//this line removed url hash
        var current = event.item.index;
        var hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
        $('.' + hash).addClass('active');
        $('.' + hash + " .sliderProgressBar").show();
        sliderprogress(0);
        owl1.trigger('stop.owl.autoplay');
        owl1.trigger('play.owl.autoplay');
        $('.owl-carousel1 .owl-item').not('.active').removeClass('owl-animated-out').removeClass('fadeOut').removeClass('animated').removeClass('owl-animated-in').removeClass('fadeIn');
        var totalactiveowl = $(".owl-carousel2 .owl-item.active").length;
        var activeindex = $(".owl-carousel2 .owl-item .item.active").parent(".owl-item").index();
        if (activeindex == 0) {
            owl2.trigger('to.owl.carousel', 0, 300);
        }
        else if (activeindex > (totalactiveowl - 1)) {
            owl2.trigger('to.owl.carousel', activeindex, 300);
            //owl1.trigger('refresh.owl.carousel');
            //owl2.trigger('refresh.owl.carousel');
        }
        //window.location.hash = '';
    });

    owl1.on('change.owl.carousel', function (event) {
        var current = event.item.index;
        var hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
        $('.' + hash + " .sliderProgressBar").css("width", 0);
        $('.' + hash + " .sliderProgressBar").hide();
        $('.' + hash).removeClass('active');
    });

    $('.owl-carousel2').on('initialized.owl.carousel', function (event) {
        var owlthumbheight = parseInt($('.owl-carousel2').height()) + 100;
        $('.owl-item-text').each(function () {
            $(this).css('bottom', owlthumbheight);
        });
    });

    var owl2 = $('.owl-carousel2').owlCarousel({
        autoplay: false,
        dots: false,
        margin: 20,
        responsive: {
            0: {
                items: 5,
            },
            650: {
                items: 2,
            },
            769: {
                items: 3
            },
            993: {
                items: 4
            },
            1201: {
                items: 6
            }
        },
        onInitialized: addAriaLabelsToA
    });

    function addAriaLabelsToA(event) {
        const dots = event.target.querySelectorAll('.owl-carousel2 .item');
        dots.forEach((dot, index) => {
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        });
    }

    //var i = 0;
    function sliderprogress(i) {
        if (i == 0) {
            i = 1;
            var elem = $(".slider-thumbnails .item-thumb-slider.active .sliderProgressBar")//document.getElementById("myBar");
            var width = 0;
            var id = setInterval(frame, 97);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem[0].style.width = width + "%";
                    //elem.innerHTML = width + "%";
                }
            }
        }
    }
    sliderprogress(0);

    //video
    var owl3 = $('.owl-carousel3').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        stagePadding: 100,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 10,
            },
            577: {
                items: 2,
                stagePadding: 10,
            },
            769: {
                items: 3
            },
            993: {
                items: 3
            },
            1201: {
                items: 2
            }
        },
        onTranslate: function (event) {
            var currentSlide, player, command;
            currentSlide = $('.owl-item.active');
            player = currentSlide.find(".flex-video iframe").get(0);
            command = {
                "event": "command",
                "func": "pauseVideo"
            };
            if (player != undefined) {
                player.contentWindow.postMessage(JSON.stringify(command), "*");
            }
        }
    });

    //var testimonialimageresponsive = function () {
    //    $('.img-main-slider').each(function () {
    //        if (window.matchMedia('(min-width: 1601px)').matches) {
    //            if ($(this).attr('src') != $(this).attr("data-src-1980")) {
    //                $(this).attr('src', $(this).attr("data-src-1980"));
    //            }
    //        }
    //        else if (window.matchMedia('(min-width: 1451px)').matches) {
    //            $(this).attr('src', $(this).attr("data-src-1600"))
    //        }
    //        else {
    //            $(this).attr('src', $(this).attr("data-src-400"))
    //        }
    //    });
    //};

    //$(window).resize(testimonialimageresponsive);
    //// Call the function
    //testimonialimageresponsive();

    //Testimonials
    $('.owl-carousel4').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        stagePadding: 100,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 1,
        responsive: {
            0: {
                items: 1,
                stagePadding: 10,
            },
            577: {
                items: 2,
                stagePadding: 10,
            },
            769: {
                items: 2,
                stagePadding: 10,
            },
            992: {
                items: 1,
                stagePadding: 100,
            }
        },
        onInitialized: addAriaLabelsToDots
    })

    function addAriaLabelsToDots(event) {
        const dots = event.target.querySelectorAll('.owl-dot');
        dots.forEach((dot, index) => {
            dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        });
    }

    //Recently Viewed Treks
    $('.owl-carousel5').owlCarousel({
        //loop: true,
        //margin: 20,
        rewind: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            577: {
                items: 2
            },
            769: {
                items: 3
            },
            993: {
                items: 3
            },
            1201: {
                items: 4
            }
        }
    })
})

document.addEventListener("DOMContentLoaded", function (event) {
    var a = 1
    $(".gauge").each(function () {
        new JustGage({
            id: "g" + a,
            value: $('#ml' + a).html(),
            min: 0,
            max: 10,
            pointer: true,
            hideMinMax: true,
            gaugeWidthScale: 1.2,
            customSectors: [{
                color: '#CF0003',
                lo: 6,
                hi: 10
            }, {
                color: '#FFA200',
                lo: 4,
                hi: 6
            }, {
                color: '#fff900',
                lo: 3,
                hi: 4
            }, {
                color: '#00ff00',
                lo: 0,
                hi: 3
            }],
            counter: true
        });
        a++;
    });
});
