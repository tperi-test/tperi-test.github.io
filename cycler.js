function cycleImages() {
    var $active = $('#nd-cycler .active');
    var $next = ($('#nd-cycler .active').next().length > 0) ? $('#nd-cycler .active').next() : $('#nd-cycler img:first');
    $next.css('z-index', 2);
    $active.fadeOut(1500, function () {
        $active.css('z-index', 1).show().removeClass('active');
        $next.css('z-index', 3).addClass('active');
    });
}

$(document).ready(function () {
    $('#nd-cycler').fadeIn(1000);
    setInterval('cycleImages()', 4000);
})