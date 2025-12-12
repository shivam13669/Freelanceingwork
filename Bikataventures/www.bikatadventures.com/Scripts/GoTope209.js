$(document).ready(function () {
    $('body').append('<div id="toTop" class="btn btn-danger no-print"><span class="fa fa-chevron-up"></span></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});



$("form.validatelength").on('submit', function (event) {
    var $this = $(this);
    event.preventDefault();
    if ($this.find('.searchstring').val().length < 3) {
        alert("Minimum 3 characters required.");
    }
    //var lengthcheck = /^(\s*\w\s*){3}/;
    //if (!lengthcheck.test($('.searchstring').val())) {
    //    alert("Minimum 3 characters required.");
    //    //$this.find('.searchstring').focus();
    //}
    else {
        $this[0].submit();
    }
});