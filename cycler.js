function cycleImages() {
    var $active = $('#cycler .active');
    var $next = ($('#cycler .active').next().length > 0) ? $('#cycler .active').next() : $('#cycler img:first');
    $next.css('z-index', 2);
    $active.fadeOut(1500, function () {
        $active.css('z-index', 1).show().removeClass('active');
        $next.css('z-index', 3).addClass('active');
    });
}

$(document).ready(function () {
    $('#cycler').fadeIn(1500);
    setInterval('cycleImages()', 5000);
})