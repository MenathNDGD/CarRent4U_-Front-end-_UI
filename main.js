$(document).ready(function(){
    var $topBtn = $('#topBtn');
    var scrollTimeout;

    $(window).on('scroll', function(){
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function(){
            if ($(window).scrollTop() > 50) {
                $topBtn.fadeIn();
            } else {
                $topBtn.fadeOut();
            }
        }, 100);
    });

    $topBtn.on('click', function(){
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });
});
