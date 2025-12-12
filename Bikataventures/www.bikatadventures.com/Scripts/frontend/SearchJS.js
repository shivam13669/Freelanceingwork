(function () {
    const tabEl = document.querySelector('#filter-btn-wrap');
    tabEl.addEventListener('click', function (event) {
        const selectedTarget = event.target.id;
        const targetEl = document.querySelector(`[data-target="${selectedTarget}"]`);
        $(targetEl).siblings().addClass('hide-filter');
        targetEl.classList.remove('hide-filter');
    })
})()


$(document).ready(function () {
    $("#filter-btn-mobile-id").click(function () {
        $("#filter-wrapper-mobile-id").toggle();
    });

    $('#filter-close-btn').on('click', function () {
        $('.filter-wrapper').hide();
    });

    $("#departure-btn").click(function () {
        $(".calendarWrap").toggleClass('calendar-class');
    });
});

//$('#calendar-close-btn').on('click', function () {
//    $(this).parent().html('');
//})

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        //defaultDate: '2023-04-24',
        navLinks: false, // can click day/week names to navigate views
        editable: false,
        showNonCurrentDates: false,
        eventSources: [
            {
                url: '/home/getcalendar',
            }
        ],
        eventClick: function (info) {
            info.jsEvent.preventDefault(); // don't let the browser navigate

            if (info.event.url) {
                window.open(info.event.url, '_self');
            }
        },
        //events: [
        //    {
        //        title: '2 DEP',
        //        start: '2023-05-02',
        //        display: 'background',
        //        color: '#73C96F',
        //    },
        //],      

    });
    calendar.render();
    $(".fc-toolbar-chunk:last-child").prepend('<div style="position:absolute; right:5px"><span class="fa fa-times" onclick="$(\'#departure-btn\').click()"></span></div>');
});

$(document).on('click', '.fc-daygrid-day-number', function () {
    //if ($(this).closest('.fc-daygrid-day-frame').find('.fc-event-title').length > 0) {
    //    $("#overlay").show();
    //}
    $(this).closest('.fc-daygrid-day-frame').find('.fc-event-title').click();
})

//$('.page-link').on("click", function () {
//    $(this).css("background", "green");
//})

function equalsearchheight() {
    var EqualHeight = 0;
    $('.trek-card-column .trek-card').each(function () {
        if ($(this).height() > EqualHeight) {
            EqualHeight = $(this).height();
        }
    });
    $('.trek-card-column .trek-card').height(EqualHeight);
}

$(document).ready(function () {
    equalsearchheight();
});


$(function () {
    var autoCompleteNames = [
        "Advanced Open Water - Scuba Diving Course",
        "Advanced Open Water Course Pondicherry",
        "Advance Skiing Course - Gulmarg",
        "Alang Madan Kulang Trek",
        "Ali Bedni Bugyal Trek",
        "Andharban Trek",
        "Animal Pass Trek",
        "Annapurna Base Camp Trek",
        "Annapurna Circuit Trek with Tilicho Lake",
        "Annapurna Circuit Trek with Tilicho Lake",
        "Arnala Fort Trek",
        "Arwa Tower Peak Expedition",
        "Auden's Col  Expedition",
        "Ayodhya Hills Trek",
        "Camp Green Hut - Bairagarh ",
        "Bali Pass Trek",
        "Bandarpunch Peak",
        "Baraadsar Lake Trek",
        "Bara Bhangal Trek",
        "Bashleo Pass Trek",
        "Basic kayaking Course",
        "Basic Rock Craft Workshop(8 Days)",
        "Manali - Basic Skiing Course",
        "Beas Kund Trek",
        "Bhimashankar Trek",
        "Bhrigu Lake Trek",
        "Mt. Black Peak",
        "Borasu Pass Trek",
        "Brahmatal Trek ",
        "Buran Ghati Trek",
        "Chadar - The Frozen River Trek",
        "Chandrakhani Pass Trek",
        "Chandranahan Lake Winter Trek",
        "Chanshal Pass Trek",
        "Chembra Peak Trek",
        "Tungnath Chandrashila Trek (Via Deoria Tal)",
        "Churdhar Trek",
        "Danphebir La Trek",
        "Darcha Lamayuru Trek",
        "Dayara Bugyal Trek",
        "Dehradun Mussoorie Ride",
        "Deo Tibba Base Camp Trek",
        "Mt. Deo Tibba Peak",
        "Devkund Waterfall Trek",
        "Dev Kyara Trek",
        "Dev Roopa Trek",
        "Dharansi Pass Trek",
        "Dhauladhar Hidden Lakes Trek",
        "Dhumdhar Kandi Pass Trek",
        "Digar La with Nubra and Pangong Tso",
        "Discover Scuba Diving Course",
        "Dodital Darwa Pass Trek",
        "Dree River Trek",
        "Dudhsagar Falls Trek",
        "Durinar Lake Trek",
        "Dzo Jongo Peak Trek",
        "Dzukou Valley Trek",
        "Eskimo Roll Workshop",
        "Everest Base Camp with Gokyo Ri and Gokyo Lakes",
        "Everest Base Camp Trek",
        "Friendship Peak Trek",
        "Brahmpuri to Rishikesh Rafting",
        "KODIYALA TO RISHIKESH RAFTING ",
        "MARINE DRIVE TO RISHIKESH RAFTING ",
        "SHIVPURI TO RISHIKESH RAFTING",
        "Gangotri III Peak",
        "Vasuki Tal Trek",
        "Gangtok Yuksom Cycling Expedition",
        "Gaumukh Tapovan Trek",
        "Get Moving Challenge 1.0",
        "Ghepan Ghat Lake Trek",
        "Gidara Bugyal Trek",
        "Goechala Trek",
        "Golep Kangri Trek",
        "Gorichen Trek - The Bailey Trail",
        "Great Sahyadris Trail",
        "Gunas Pass Trek",
        "Gurgaon Nandan Van Deer Park Ride ",
        "Tawang Bum La Cycling Expedition",
        "Gwaru Pass Trek",
        "Hampta Pass Trek",
        "Hamta Circle Trek",
        "Harishchandragad Trek",
        "Har ki Dun Trek",
        "Hatu Peak Trek ",
        "Roopkund Homkund Ronti Saddle Trek",
        "Indrahar Pass Trek",
        "Integrated Basic Kayaking Course",
        "Intermediate Skiing Course - Gulmarg",
        "Introduction to Mountaineering",
        "Jagatsukh Peak Trek",
        "Jiwa Nallah to Parwati river valley trek",
        "Kalavantin Durg Trek",
        "Kalihani Pass Trek",
        "Kalindi Khal Expedition",
        "Kalsubai Trek",
        "Kanamo Peak Trek",
        "Kang La Trek",
        "Kang Yatse I Peak",
        "Kang Yatse II Peak Trek",
        "Kareri Lake Trek",
        "Kareri Lake Winter Trek",
        "Karnala Fort Trek",
        "Kashmir Great Lakes Trek",
        "Kashmir Great Lakes Winter Trek",
        "Camp Daniel - Kaudiyala",
        "Mt. Kedar Dome",
        "Kedarkantha Trek",
        "Kedartal Trek",
        "Khauli Pass Trek",
        "Khopra Ridge Trek ",
        "Kinner Kailash Trek",
        "Kishong Lake Trek",
        "Kodachadri Trek",
        "Kodachadri Trek",
        "Kuari Pass Trek",
        "Kudremukh Trek",
        "Kumara Parvatha Trek",
        "Kumta Gokarna Beach Trek",
        "Lamayuru Alchi Trek",
        "Lamayuru to Chilling Trek",
        "Lamkhaga Pass Trek",
        "Langtang Valley Trek",
        "Larsa We Trek",
        "Lasermo La Trek",
        "Leh Tso Moriri Cycling Expedition",
        "Mahuli Fort Trek",
        "Makalidurga Trek",
        "Manali Chandratal Cycle Expedition",
        "MTB Cycling Workshop",
        "manali - kaza - shimla - cycle - expedition",
        "Manali Khardung La Cycle Expedition",
        "Rock Climbing Workshop",
        "Camp Apple Pie - Manali",
        "Manaslu Circuit Trek",
        "Mandani Valley Trek",
        "Mantalai Lake Trek",
        "Mardi Himal Trek",
        "Markha Valley Trek",
        "Markha Valley Trek & Rafting in Zanskar",
        "Markha Valley Winter Trek",
        "Mayali Pass Trek",
        "Mentok Kangri II Expedition",
        "Milam Glacier & Nanda Devi Base Camp Trek",
        "Miyar Valley Trek",
        "Mont Blanc Expedition",
        "Mt. Hanuman Tibba Expedition",
        "Mount Kilimanjaro Trek",
        "Mount Kilimanjaro Trek With Wildlife Safari",
        "Mt. Kun Peak",
        "Mount Meru Trek",
        "Mt. Nun Peak",
        "Mt. Shivling",
        "Mt. Bhagirathi 2",
        "Mt. CB 13 and CB 14 Expedition",
        "Mt Satopanth Expedition",
        "Mukta Top Trek",
        "Mullayanagiri Trek",
        "Mural Danda Trek",
        "Nag Tibba Trek",
        "Nag Tibba Summer Hike",
        "Nainital Tour",
        "Namik Glacier Trek",
        "Nanda Devi Base Camp Trek",
        "Mt. Nanda Ghunti",
        "Nar Phu Valley Trek",
        "Nubra Valley Trek",
        "Open Water - Scuba Diving Course",
        "Open Water Scuba Diving Course",
        "Emergency First Response - Scuba Diving",
        "Pangarchulla Peak Trek",
        "Panpatia Col Trek",
        "Panwali Kantha Trek",
        "Parang La Expedition",
        "Patalsu Peak Trek",
        "Gaumukh Tapovan Photography Trek",
        "Phulara Ridge Trek",
        "Pin Bhaba Pass Trek",
        "Pindari Glacier Trek",
        "Pin Parvati Pass Expedition",
        "Poon Hill Trek",
        "Prashar Lake Hike",
        "Rajgad fort Trek",
        "Rajgad - Torna Fort Trek",
        "Rajmachi Fort Trek",
        "Raktisar Trek",
        "Rescue Diver Course",
        "Rishikesh to Chamba Ride",
        "Sunday Climbing Sessions",
        "Lado Sarai Old Rocks - Climbing Session ",
        "Roopkund Trek",
        "Rudugaira Trek",
        "Ruinsara Tal Trek",
        "Rumtse to Tso Moriri Lake Trek",
        "Rupin Pass Trek",
        "Saach Pass Cycling Expedition",
        "Sandakphu Trek",
        "Sandhan Valley Trek",
        "Sara Umga Pass Trek",
        "Sari Pass Trek",
        "Sar Pass Trek",
        "Satopanth Lake Trek",
        "school activities",
        "Seven Lakes Trek",
        "Shade Village Trek",
        "Sham Valley Trek",
        "Camp Snow View - Sheetlakhet",
        "Kufri Solan Ride",
        "Shrikhand Mahadev Trek",
        "Siachen Glacier Trek",
        "Basic Skiing Course - Gulmarg",
        "Skiing Basic Course - Auli",
        "Snow Leopard Trek - Ladakh",
        "Snow Leopard Trek - Spiti",
        "Screwed Up Ice Climbing Festival",
        "Snow Leopard Trek ",
        "Spiti Winter Homestay Trail",
        "Spituk Trek",
        "Srinagar Leh Cycling Expedition",
        "Stok Kangri Trek",
        "Sumda Chey Winter Trek",
        "Summer Camp",
        "Rock Climbing Session - Damdama Lake New Rocks",
        "Damdama Lake Rocks - Climbing Session",
        "Dhauj Rocks - Climbing Session",
        "Kota Khandeola Rocks - Climbing Session",
        "Tadiandamol Trek",
        "Talle Valley Trek",
        "Tarsar Marsar Trek",
        "Tirthan Valley Cycle Ride",
        "Tirthan Valley Trek",
        "Torna Fort Trek",
        "Tosamaidan Greater Lakes Trek",
        "Camp Rock Stone - Manali",
        "Triund Trek",
        "Valley of Flowers Trek",
        "Visapur Fort Trek ",
        "Vishkhopri Trek",
        "Warwan Valley Trek",
        "Yunam Peak Trek",
        "Zanskar Lamayuru Trek",
    ];
    $("#search-id").autocomplete({
        source: autoCompleteNames,
        autoFocus: true,
        select: function (event, ui) {
            $("#search-id").val(ui.item.value);
            $("#submit-btn-search-form").click();
            return true;
        }
    });
});

//global variable
var currentPage = 1;
var totalPages = 0;

//this function is called when filter from url is loaded
function _getURL() {
    var e = window.location.href,
        l = e.split("?"),
        t = l[1] ? l[1].split("&") : void 0;

    if (l[1]) {
        $('#filterpage').val(t[0].replace("page=", ""));
        $('#filterbrs').val(t[1].replace("brs=", ""));
        $('#filterprice').val(t[2].replace("price=", ""));
        $('#filterduration').val(t[3].replace("duration=", ""));
        $('#filteraltitude').val(t[4].replace("altitude=", ""));
        $('#filtermonth').val(t[5].replace("month=", ""));
        $('#filterregion').val(t[6].replace("region=", ""));
        $('#filtercategory').val(t[7].replace("category=", ""));
        $('#filterfeature').val(t[8].replace("feature=", ""));
        $('#filterdistance').val(t[9].replace("distance=", ""));
        $('#filtersortby').val(t[10].replace("sort_by=", ""));
        currentPage = $('#filterpage').val();

        $("#sort_id").val($('#sort-id option:selected').text());
        $("#sort-id").val($("#filtersortby").val());
        var fields = ["filterbrs", "filterprice", "filterduration", "filteraltitude", "filtermonth", "filterregion", "filtercategory", "filterfeature", "filterdistance"]
        for (j = 0; j < fields.length; j++) {
            var wt = $("#" + fields[j]).val().split("|");
            for (i = 0; i < wt.length; i++) {
                $("." + fields[j] + ".filter-checkbox").each(function () {
                    if ($(this).attr("data-value") == wt[i]) {
                        $(this).prop("checked", true);
                    }
                });
            }
        }

        var htmlfilter = "";
        $('.filter-checkbox').each(function () {
            if ($(this).is(":checked")) {
                htmlfilter += '<a href="javascript:void(0)" class="filter-trek-by-button">' + $(this).parent().text() + ' <i class="fas fa-window-close delete-filter" data-del-value="' + $(this).attr("data-value") + '"></i></a>'
            }
        });
        $('.filter-trek-by-button-div').html(htmlfilter);
    }
}

$(document).ready(function () {
    if (((window.location.href.includes("searchstring") == true) || (window.location.href.includes("datebatch") == true)) != true) {
        _getURL();
        updatePagination($('#totalresultscount').val());
    }
    $("#sort_id").val($('#sort-id option:selected').text());
    window.history.pushState({ "html": "filtered" }, "", "");
});

$('#clear-all-id').on('click', function () {
    $(".filter-checkbox").prop("checked", false);
    $('.filter-trek-by-button-div').html('');
    $('#filterbrs').val("");
    $('#filterprice').val("");
    $('#filterduration').val("");
    $('#filteraltitude').val("");
    $('#filtermonth').val("");
    $('#filterregion').val("");
    $('#filtercategory').val("");
    $('#filterfeature').val("");
    $('#filterdistance').val("");
    $('#filterpage').val("");
    _parseURL()
})

function filterproduct(resetpage) {
    if (resetpage) {
        $('#filterpage').val(1);
        currentPage = 1;
    }
    var filter = '?', filterlist = "", count = 0;
    filter += "page=";
    filter += $('#filterpage').val();
    filter += "&brs=";
    $('.filter-brs input:checked').each(function () {
        if (count != 0) {
            filter += "|";
            filterlist += "|";
        }
        filter += $(this).attr('data-value');
        filterlist += $(this).attr('data-value');
        count++;
    });
    $('#filterbrs').val(filterlist);
    count = 0; filterlist = "";

    filter += "&price=";
    $('.filter-price input:checked').each(function () {
        if (count != 0) {
            filter += "|";
            filterlist += "|";
        }
        filter += $(this).attr('data-value');
        filterlist += $(this).attr('data-value');
        count++;
    });
    $('#filterprice').val(filterlist);
    count = 0; filterlist = "";

    filter += "&duration=";
    $('.filter-duration input:checked').each(function () {
        if (count != 0) {
            filter += "|";
            filterlist += "|";
        }
        filter += $(this).attr('data-value');
        filterlist += $(this).attr('data-value');
        count++;
    });
    $('#filterduration').val(filterlist);
    count = 0; filterlist = "";

    filter += "&altitude=";
    $('.filter-altitude input:checked').each(function () {
        if (count != 0) {
            filter += "|";
            filterlist += "|";
        }
        filter += $(this).attr('data-value');
        filterlist += $(this).attr('data-value');
        count++;
    });
    $('#filteraltitude').val(filterlist);
    count = 0; filterlist = "";

    filter += "&month=";
    $('.filter-month input:checked').each(function () {
        if (count != 0) {
            filter += "|";
            filterlist += "|";
        }
        filter += $(this).attr('data-value');
        filterlist += $(this).attr('data-value');
        count++;
    });
    $('#filtermonth').val(filterlist);
    count = 0; filterlist = "";

    filter += "&region=";
    $('.filter-region input:checked').each(function () {
        if (count != 0) {
            filter += "|";
            filterlist += "|";
        }
        filter += $(this).attr('data-value');
        filterlist += $(this).attr('data-value');
        count++;
    });
    $('#filterregion').val(filterlist);
    count = 0; filterlist = "";

    filter += "&category=";
    $('.filter-category input:checked').each(function () {
        if (count != 0) {
            filter += "|";
            filterlist += "|";
        }
        filter += $(this).attr('data-value');
        filterlist += $(this).attr('data-value');
        count++;
    });
    $('#filtercategory').val(filterlist);
    count = 0; filterlist = "";

    filter += "&feature=";
    $('.filter-feature input:checked').each(function () {
        if (count != 0) {
            filter += "|";
            filterlist += "|";
        }
        filter += $(this).attr('data-value');
        filterlist += $(this).attr('data-value');
        count++;
    });
    $('#filterfeature').val(filterlist);
    count = 0; filterlist = "";

    filter += "&distance=";
    $('.filter-distance input:checked').each(function () {
        if (count != 0) {
            filter += "|";
            filterlist += "|";
        }
        filter += $(this).attr('data-value');
        filterlist += $(this).attr('data-value');
        count++;
    });
    $('#filterdistance').val(filterlist);
    count = 0; filterlist = "";

    filter += "&sort_by=" + $('#sort-id option:selected').attr('data-text');
    $('#filtersortby').val($('#sort-id option:selected').attr('data-text'));

    window.history.pushState({ "html": "filtered" }, "", filter);

    _parseURL()

}

window.onpopstate = function (e) {
    if (e.state) {
        _buildURL();
        _parseURL();
        _setfilter();
    }
};

function _buildURL() {
    var e = window.location.href,
        l = e.split("?"),
        t = l[1] ? l[1].split("&") : void 0;

    if (l[1]) {
        $('#filterpage').val(t[0].replace("page=", ""));
        $('#filterbrs').val(t[1].replace("brs=", ""));
        $('#filterprice').val(t[2].replace("price=", ""));
        $('#filterduration').val(t[3].replace("duration=", ""));
        $('#filteraltitude').val(t[4].replace("altitude=", ""));
        $('#filtermonth').val(t[5].replace("month=", ""));
        $('#filterregion').val(t[6].replace("region=", ""));
        $('#filtercategory').val(t[7].replace("category=", ""));
        $('#filterfeature').val(t[8].replace("feature=", ""));
        $('#filterdistance').val(t[9].replace("distance=", ""));
        $('#filtersortby').val(t[10].replace("sort_by=", ""));
        currentPage = $('#filterpage').val();
    }
    else {
        $('#filterpage').val("");
        $('#filterbrs').val("");
        $('#filterprice').val("");
        $('#filterduration').val("");
        $('#filteraltitude').val("");
        $('#filtermonth').val("");
        $('#filterregion').val("");
        $('#filtercategory').val("");
        $('#filterfeature').val("");
        $('#filterdistance').val("");
        $('#filtersortby').val("");
        $(".filter-checkbox").prop("checked", false);
        currentPage = 1;
    }
}

function _parseURL() {
    $('.trek-card-div').html("");
    $("#overlay").show();
    $.post("/Home/getexpeditions", { "page": $('#filterpage').val(), "brs": $('#filterbrs').val(), "price": $('#filterprice').val(), "duration": $('#filterduration').val(), "altitude": $('#filteraltitude').val(), "month": $('#filtermonth').val(), "region": $('#filterregion').val(), "category": $('#filtercategory').val(), "feature": $('#filterfeature').val(), "distance": $('#filterdistance').val(), "sort_by": $('#filtersortby').val() },
        function (data) {
            htmldata = "";
            for (var i = 0; i < data.length; i++) {
                htmldata += '<div class="col-md-4 col-sm-6 trek-card-column">' +
                    '<div class=" trek-card">' +
                    '<a href="/Home/Itinerary/' + data[i].ExpID + '" class="trek-card-anchor-wrapper">' +
                    '<div class="trek-card-image-div">' +
                    '<img class="trek-card-image" src="' + data[i].image + '" alt="" />' +
                    '</div>' +
                    '<div class="trek-card-info-div">' +
                    '<h4 class="trek-card-heading">' + data[i].Title + '' + '</h4>' +
                    '<h5 class="trek-card-place">' +
                    '<span>' + data[i].reg + '</span>' +
                    '</h5>' +
                    '<div class="trek-info-in-card-wrapper">' +
                    '<div class="trek-info-in-card"> <i class="fas fa-tachometer-alt"></i>  BRS' + data[i].Mlevel + ' ' + '</div>' +
                    '<div class="trek-info-in-card"> <i class="far fa-calendar-alt"></i> ' + data[i].Mtext + ' ' + '</div>' +
                    '<div class="trek-info-in-card"> <i class="fas fa-map-marked-alt"></i> ' + data[i].Distance + ' ' + ' Km </div>' +
                    '</div>' +
                    '<h5 class="max-alt-trek-card-heading">Max altitude</h5>' +
                    '<div class="max-alt-trek-card"> <i class="fas fa-tachometer-alt"></i> ' + data[i].Altitude + ' ' + 'mts </div>' +
                    '<h6 class="trek-card-price-heading"> Price  </h6>' +
                    '<div class="trek-card-price-and-explore">  ₹ ' + data[i].Fees + ' ' + ' <span class="trek-card-explore-button">Explore</span>' +
                    '</div>';
                if (data[i].percent > 0 && data[i].percent != null) {
                    htmldata += '<a href="javascript:void(0)" class="trek-card-percent-off"> Upto ' + data[i].percent + '% off</a>';
                }
                htmldata += '</div>' +
                    '</a>' +
                    '</div>' +
                    '</div>';
            }
            var htmlfilter = "";
            $('.filter-checkbox').each(function () {
                if ($(this).is(":checked")) {
                    htmlfilter += '<a href="javascript:void(0)" class="filter-trek-by-button">' + $(this).parent().text() + ' <i class="fas fa-window-close delete-filter" data-del-value="' + $(this).attr("data-value") + '"></i></a>'
                }
            });
            $('.filter-trek-by-button-div').html(htmlfilter);
            $('.ajax-pagination').html("");
            try {
                if (data[0].Total > 21) {
                    updatePagination(data[0].Total);
                }
            } catch { }
            $("#overlay").hide();
            if (data.length > 0)
                $('.results-found').html(data[0].Total + ' results found <i class="fas fa-angle-down"></i>');
            else {
                htmldata = '<div style="padding:20% 30%" class="text-center">' +
                    '<h5 class="text-center">Empty Filter</h5>' +
                    '<p class="text-center">' +
                    'There are no expeditions matching the selection.' +
                    '</p><br />' +
                    '<a href="/home/find_your_next_adventure" class="text-center">Explore More</a>' +
                    '</div>'
                $('.results-found').html('0 results found <i class="fas fa-angle-down"></i>');
                $('.ajax-pagination').html("");
            }
            $('.trek-card-div').html(htmldata).fadeIn('slow');
            equalsearchheight();
        });
}

function updatePagination(total) {
    totalPages = total;
    totalPages = Math.ceil(totalPages / 21);
    var htmlpagination = $('.ajax-pagination');
    htmlpagination.empty();

    var visiblePages = 3; // Number of visible page numbers
    var startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    var endPage = Math.min(totalPages, startPage + visiblePages - 1);

    htmlpagination.append('<li class="page-item"><a class="page-link" href="javascript:void(0)" id="prev"><i class="fas fa-angle-double-left"></i> Previous</a></li>');

    if (startPage > 1) {
        htmlpagination.append('<li class="page-item "><a class="page-link page-number-btn" href="javascript:void(0)">1</a></li>');
        if (startPage > 2) {
            htmlpagination.append('<li class="page-item "><a class="page-link page-number-btn disabled" href="javascript:void(0)">...</a></li>');
        }
    }

    for (var i = startPage; i <= endPage; i++) {
        var pageNumber = $('<li class="page-item "><a class="page-link page-number-btn" href="javascript:void(0)">' + i + '</a></li>');
        if (i === parseInt(currentPage)) {
            pageNumber.addClass('active');
        }
        htmlpagination.append(pageNumber);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            htmlpagination.append('<li class="page-item "><a class="page-link page-number-btn disabled" href="javascript:void(0)">...</a></li>');
        }
        htmlpagination.append('<li class="page-item "><a class="page-link page-number-btn" href="javascript:void(0)">' + totalPages + '</a></li>');
    }

    htmlpagination.append('<li class="page-item"><a class="page-link" href="javascript:void(0)" id="next">Next <i class="fas fa-angle-double-right"></i></a></li>');

    //Non ellipses pagination code
    //htmlpagination.append('<li class="page-item"><a class="page-link" href="javascript:void(0)" id="prev"><i class="fas fa-angle-double-left"></i> Previous</a></li>');
    //for (var i = 1; i <= totalPages; i++) {
    //    var pageNumber = $('<li class="page-item "><a class="page-link page-number-btn" href="javascript:void(0)">' + i + '</a></li>');
    //    if (i === parseInt(currentPage)) {
    //        pageNumber.addClass('active');
    //    }
    //    htmlpagination.append(pageNumber);
    //}
    //htmlpagination.append('<li class="page-item"><a class="page-link" href="javascript:void(0)" id="next">Next <i class="fas fa-angle-double-right"></i></a></li>');
}

// Event delegation for dynamically added pagination numbers
$(document).on('click', '.page-number-btn', function () {
    currentPage = parseInt($(this).text());
    $('#filterpage').val(currentPage);
    filterproduct(0);
});

// Load content when the previous button is clicked
$('.ajax-pagination').on('click', '#prev', function () {
    if (currentPage > 1) {
        currentPage = parseInt(currentPage);
        currentPage -= 1;
        $('#filterpage').val(currentPage);
        filterproduct(0);
    }
});

// Load content when the next button is clicked
$('.ajax-pagination').on('click', '#next', function () {
    if (currentPage < totalPages) {
        currentPage = parseInt(currentPage);
        currentPage += 1;
        $('#filterpage').val(currentPage);
        filterproduct(0);
    }
});

$('.filter-trek-by-button-div').on('click', '.delete-filter', function () {
    var delval = $(this).attr('data-del-value');
    $(".filter-checkbox").each(function () {
        if ($(this).attr("data-value") == delval) {
            $(this).prop("checked", false);
            filterproduct(1);
        }
    });
});


function _setfilter() {
    var e = window.location.href,
        l = e.split("?");

    if (l[1]) {
        $("#sort-id").val($("#filtersortby").val());
        $("#sort_id").val($('#sort-id option:selected').text());
        $(".filter-checkbox").prop("checked", false);
        var fields = ["filterbrs", "filterprice", "filterduration", "filteraltitude", "filtermonth", "filterregion", "filtercategory", "filterfeature", "filterdistance"]
        for (j = 0; j < fields.length; j++) {
            var wt = $("#" + fields[j]).val().split("|");
            for (i = 0; i < wt.length; i++) {
                $("." + fields[j] + ".filter-checkbox").each(function () {
                    if ($(this).attr("data-value") == wt[i]) {
                        $(this).prop("checked", true);
                    }
                });
            }
        }
    }
    else {
        $('#filterpage').val("")
        $('#filterbrs').val("");
        $('#filterprice').val("");
        $('#filterduration').val("");
        $('#filteraltitude').val("");
        $('#filtermonth').val("");
        $('#filterregion').val("");
        $('#filtercategory').val("");
        $('#filterfeature').val("");
        $('#filterdistance').val("");
        $('#filtersortby').val("");
    }
}
