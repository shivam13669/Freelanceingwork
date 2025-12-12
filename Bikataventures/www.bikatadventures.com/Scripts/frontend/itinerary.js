//this hides addon section
if ($('.addons-block').text().trim() == 'Add ons') {
    $('.addons-block').hide()
}
//function setEqualHeight() {
//    const column1 = document.getElementsByClassName('.yt-video-column');
//    const column2 = document.getElementsByClassName('.div-trek-info');

//    const height1 = column1.offsetHeight;
//    const height2 = column2.offsetHeight;

//    const maxHeight = Math.max(height1, height2);

//    column1.style.height = maxHeight + 'px';
//    column2.style.height = maxHeight + 'px';
//}

//// Call the function on window load and resize events
//window.addEventListener('load', setEqualHeight);
//window.addEventListener('resize', setEqualHeight);


var itineraryimageinfoequalheight = function () {
    $('.video-caption').css('padding', '30px');
    $('.trek-info-container .div-trek-info').css('min-height', 'auto');
    var leftheight = $('.yt-video-column').height();
    var rightheight = $('.trek-info-container .div-trek-info').height();
    var videocover = $('#video-cover').height();
    var videocaption = $('.video-caption').outerHeight();
    /*var screenwidth = window.matchMedia("(min-width: 768px)");*/
    if (window.matchMedia('(min-width: 768px)').matches) {
        if (rightheight > leftheight) {
            var differnceheight = rightheight - videocover - videocaption;
            $('.video-caption').css('padding', 30 + (differnceheight/2) + 'px' + ' 30px')
        }
        else {
            $('.trek-info-container .div-trek-info').css('min-height', leftheight + 'px');
        }
    }
};

$(window).resize(itineraryimageinfoequalheight);
// Call the function
$(document).ready(function () {
    itineraryimageinfoequalheight();
//    $('.nav-tags li').each(function () {
//        $(this).attr('data-left-position', Math.floor($(this).position().left));
//    });
});


//this hides dates section in all devices
if ($('.available-batch-info').text().trim() == 'Book Now') {
    $('.dm-aval-batch-block').hide();
}

//dates
$('.owl-carousel-dates').owlCarousel({
    loop: false,
    margin: 5,
    //stagePadding:5,
    nav: true,
    responsive: {
        1000: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});

$(document).ready(function () {
    $('.owl-carousel-shorts').owlCarousel({
        loop: false,
        margin: 10,
        stagePadding:5,
        nav: true,
        responsive: {
            320: {
                items:1
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
});


var positionnavtabs = $('#scrollspy-navbar').offset().top;
var positionnavtabsheight = $('#scrollspy-navbar').height();
$(window).on('scroll', function () {
    $(window).scrollTop() >= positionnavtabs ?
        $('#scrollspy-navbar').addClass('fixed-top') :
        $('#scrollspy-navbar').removeClass('fixed-top');
    $(window).scrollTop() >= positionnavtabs ?
        $('.nav-tabs-wrapper').css('height', positionnavtabsheight + 'px') :
        $('.nav-tabs-wrapper').css('height', 'auto');

});


$("#trekgallery").justifiedGallery({
    lastRow: 'nojustify',
    rowHeight: 100,
    rel: 'trekgallery',
    captions: false,
    margins: 3
});

$('.rating-stars').each(function () {
    var rating = $(this).find('#rating-stars-value').val();
    for (i = 1; i <= rating; i++) {
        $(this).find('.fa.fa-star.check-star-' + i).addClass("checked");
    }
})

//rating review
$('.owl-carousel-rating-review').owlCarousel({
    rewind: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            //margin: 0,
            items: 1
        },
        577: {
            //margin: 85,
            items: 2
        }
    }
});


//similar treks
$('.owl-carousel-st').owlCarousel({
    //loop: true,
    //margin: 170,
    rewind: true,
    nav: true,
    /*navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],*/
    dots: false,
    responsive: {
        0: {
            margin: 0,
            items: 1
        },
        577: {
            margin: 85,
            items: 2
        },
        993: {
            margin: 170,
            items: 3
        }

    }
});



//$('#play').on('click', function (e) {
//    e.preventDefault();
//    $("#player")[0].src += "?autoplay=1";
//    $('#player').show();
//    $('#video-cover').hide();
//    $('#play').hide();
//});

$('.date-book-click').click(function () {
    var url = $(this).attr('data-href');
    var exped = $(this).attr('data-ex-id');
    var batch = $(this).attr('data-dates-id');
	$('#select-date-book-now').val(batch);
    $('#dateclickbatch').val(batch);
	$('#GuestExpedID').val(exped);
    $('#select-batch-div').hide();
    if ($('.guest-email-input').val().trim() != "") {
        window.location.href = '/BookNow/Booking/' + exped + '?datesid=' + batch;
    }
    else {
        $('#GuestCheck').modal('show');
    }
});

$('.continue-modal-button').off('click').click(function () {
    var $btn = $(this);
	//e.preventDefault();
	var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var numericpattern = /^\d*$/;
	if ($('.guest-email-input').val() == "" || !emailpattern.test($('.guest-email-input').val())) {
		$('.guest-email-input').focus();
		$('.guest-email-input').attr('style', 'background:rgba(255,0,0,0.2); border:solid 1px red;')
	}
	else if ($('.guest-phone-input').val() == "" || !numericpattern.test($('.guest-phone-input').val())) {
		$('.guest-phone-input').focus();
		$('.guest-phone-input').attr('style', 'background:rgba(255,0,0,0.2);border:solid 1px red;')
	}
	else {
        $('.guest-email-input').removeAttr('style');
        var selectedLength = $('#ccodeselect option:selected').data('length');
        var phoneVal = $('.guest-phone-input').val().trim();

        var lengthRule = String(selectedLength); // ensure it's a string
        var isValidLength = false;

        if (lengthRule.includes('-')) {
            // Handle range like "8-10"
            var parts = lengthRule.split('-');
            var minLen = parseInt(parts[0]);
            var maxLen = parseInt(parts[1]);
            if (phoneVal.length >= minLen && phoneVal.length <= maxLen) {
                isValidLength = true;
            }
        } else {
            // Handle single value like "10"
            if (phoneVal.length === parseInt(lengthRule)) {
                isValidLength = true;
            }
        }

        if (!isValidLength) {
        //if (phoneVal.length !== selectedLength) {
            $('.guest-phone-input').focus();
            $('.guest-phone-input').attr('style', 'background:rgba(255,0,0,0.2);border:solid 1px red;');
            return;
        }
        $('.guest-phone-input').removeAttr('style');

        $btn.data('submitting', true);
        $btn.addClass('disabled-link');
        $btn.html('<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Submitting...');

        setTimeout(function () {
            $btn.data('submitting', false);
            $btn.removeClass('disabled-link');
            $btn.html("Continue");
        }, 180000); //3min

        $btn.attr('href', '/Home/GetEmail/' + $('#GuestExpedID').val() + '?datesid=' + $('#select-date-book-now').val() + '&email=' + $('.guest-email-input').val() + '&phone=' + $('.guest-phone-input').val() + '&url=' + $('#Guestpath').val());

		fbq('track', 'Lead');
		//$('.continue-modal-button').click();
		//$('.continue-modal-button').attr('href', 'javascript:void(0)');
	}
})

// Reset button if user navigates back to this page
$(window).on('pageshow', function () {
    var $btn = $('.continue-modal-button');
    if ($btn.data('submitting')) {
        $btn.data('submitting', false);
        $btn.removeClass('disabled-link');
        $btn.html('Continue');
    }
});


$('.button-book-click').click(function () {
    var url = $(this).attr('data-href');
    var exped = $(this).attr('data-ex-id');
	$('#GuestExpedID').val(exped);

    if ($('.guest-email-input').val().trim() != "") {
        window.location.href = '/BookNow/Booking/' + exped;
    }
    else {
        $('#GuestCheck').modal('show');
        $('#select-batch-div').show();
    }
});

$('#GuestCheck').on('hidden.bs.modal', function () {
    var batch = 0;
    var exped = $('.button-book-click').attr('data-ex-id');

    if ($('#select-date-book-now').val() != null) {
        batch = $('#select-date-book-now').val();
    }
    if ($('#dateclickbatch').val() != "" && $('#dateclickbatch').val() != 0) {
        batch = $('#dateclickbatch').val();
    }
    $(function () {
        $.ajax({
            url: "/Home/GetEmailClose",
            data: { id: exped, datesid: batch, email: $('.guest-email-input').val(), phone: $('.guest-phone-input').val(), url: $('#Guestpath').val() },
            cache: false,
            type: "POST",
            success: function (data) { }
        });

    });
})


$(document).ready(function () {
    if ($('#BookTrueArgument').val().trim() == "Book=true") {
        $('.button-book-click').click();
    }
});


$('.booknowfooter').show();
$('.booknowfooter').click(function () {
    $('.button-book-click').click();
})


$('.add-ons-checkbox .form-check .form-check-input').click(function () {
    var amount = $(this).attr("data-addon-amount");
    var cookiename = $(this).attr("data-cname");
    if ($(this).hasClass("addonincluded")) {
        $(this).removeClass("addonincluded");
        $('#trekfee').text(parseInt($('#trekfee').text()) - parseInt(amount));
        document.cookie = cookiename + "=0; path=/";
    }
    else {
        $(this).addClass("addonincluded");
        $('#trekfee').text(parseInt($('#trekfee').text()) + parseInt(amount));
        document.cookie = cookiename + "=1; path=/";
    }
});

$('.readmore-briefdescription').on("click", function () {
    if ($(this).text().trim() == "Read more") {
        $('.brief-description-content-inner').css({ "height": "auto", "overflow": "visible" });
        $(this).html(" Read less");
    } else {
        $('.brief-description-content-inner').css({ "height": "270px", "overflow": "hidden" });
        $(this).html(" Read more");
    }
});

//$('.packing-list-read-full-heading').on("click", function () {
//    $(this).hide();
//});

$('.icon').click(function () {
    $(this).find('i').toggleClass('fas fa-plus-circle fas fa-minus-circle')
});

$('.brs-bar div').each(function (index) {
    if (index < $('.brs-bar').attr("data-mlevel")) {
        $(this).css("display", "inline-block");
    }
});


(function () {
    const tabEl = document.querySelector('#eligibility-btn-wrap');
    tabEl.addEventListener('click', function (event) {      
        const selectedTarget = event.target.id;
        const targetEl = document.querySelector(`[data-target="${selectedTarget}"]`);        
        $(targetEl).siblings().addClass('hide-eligibility');
        $(targetEl).removeClass('hide-eligibility');                
        if ($(event.target).hasClass('eligibility-buttons-div')) {            
            event.target.classList.add('bg-color-mobile-active');
            $(event.target).siblings().removeClass('bg-color-mobile-active');
        }
    })
})()


function ProductCardHeight() {
    var EqualHeight = 0;
    $('.similar-trek  .similar-trek-card').each(function () {
        if ($(this).height() > EqualHeight) {
            EqualHeight = $(this).height();
        }
    });
    $('.similar-trek  .similar-trek-card').height(EqualHeight);
}

$(document).ready(function () {
    ProductCardHeight();
});



//var $body = $('body');
//findHeight('.findHeight');

//function findHeight(el) {
//    var heightArr = [];
//    $(el).each(function () {
//        heightArr.push($(this).outerHeight());
//    });
//    var tallest = Math.max.apply(null, heightArr);
//    $(el).css('height', tallest);
//    heightArr = [];
//}

//$body.on('click', 'div[class^="col-md"]', function () {
//    findHeight('.findHeight');
//});


//$('.carousel').on('touchstart', function (event) {
//    const xClick = event.originalEvent.touches[0].pageX;
//    $(this).one('touchmove', function (event) {
//        const xMove = event.originalEvent.touches[0].pageX;
//        const sensitivityInPx = 5;

//        if (Math.floor(xClick - xMove) > sensitivityInPx) {
//            $(this).carousel('next');
//        }
//        else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
//            $(this).carousel('prev');
//        }
//    });
//    $(this).on('touchend', function () {
//        $(this).off('touchmove');
//    });
//});