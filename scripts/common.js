$('.menu_toggle').click(function() {
    $('.menu_container').css({
        'display': 'flex'
    });
    $('.menu_toggle').css({
        'display': 'none'
    });
    $('.menu_cross').css({
        'display': 'block'
    });
});

$('.menu_cross').click(function() {
    $('.menu_container').css({
        'display': 'none'
    });
    $('.menu_toggle').css({
        'display': 'block'
    });
    $('.menu_cross').css({
        'display': 'none'
    });
});