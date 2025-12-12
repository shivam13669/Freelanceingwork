$(function () {
    var pew = $(".pe-list li").width() - 120;
    $(".gap-in-list").attr("style", "width:" + pew + "px");

    var sz = $(".wrap").width() - 90;
    $(".highlights").attr("style", "width:" + sz + "px");

    window.onresize = function (event) {
        var sz = $(".wrap").width() - 90;
        $(".highlights").attr("style", "width:" + sz + "px");

        var pew = $(".pe-list li").width() - 120;
        $(".gap-in-list").attr("style", "width:" + pew + "px");
    }
});


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



$(document).ready(function () {
    var height = Math.max($(".pe-col").height(), $(".tab-col").height());
    $(".tab-col").height(height);
    $(".pe-col").height(height);
});

$(document).ready(function () {
    var carouselCount = 0;
    $(".bikat-carousel").each(function () {
        $(this).attr("id", "owl-carousel" + carouselCount);
        $('#owl-carousel' + carouselCount).owlCarousel({
            items: 3, //10 items above 1000px browser width
            itemsDesktop: [1000, 3], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
            itemsTablet: [600, 1], //2 items between 600 and 0;
            itemsTabletSmall: false, // itemsTabletSmall disabled - inherit from itemsTablet option
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            navigation: true,
            navigationText: ["", ""],
            pagination: false,
            afterAction: afterAction
    });
        carouselCount++;
    });
    function afterAction() {
        $("html, body").animate({ scrollTop: $(window).scrollTop() + 1 }, 600);
        return false;
    }
    $('#People-Carousel').owlCarousel({
        items: 6, //10 items above 1000px browser width
        itemsDesktop: [1000, 6], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 5], // 3 items betweem 900px and 601px
        itemsTablet: [600, 3], //2 items between 600 and 0;
        itemsTabletSmall: false, // itemsTabletSmall disabled - inherit from itemsTablet option
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        navigationText: ["", ""],
        pagination: false
    });
});

