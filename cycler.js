var $timer = 450;

function cycleImages() {
    var $active = $('#nd-cycler .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('#nd-cycler img:first');
    var $end = $('#nd-cycler img#end');
    $next.css('z-index', 2);
    $active.fadeOut($timer, function () {
        $active.css('z-index', 1).show().removeClass('active');
        $next.css('z-index', 3).addClass('active');
    });
    $end.stop();
}
/*
 function cycleBackground() {
 var $div = $('#nd-cycler');
 var $image = new Array [
 "images/bg/bg-n.jpg",
 "images/bg/bg-a.jpg"
 ];
 $div.fadeOut($timer, function () {
 $div.css('background') 
 });

 }
 */

$(document).ready(function () {
    $('#nd-cycler').fadeIn($timer);
    setInterval('cycleImages()', $timer);
});
