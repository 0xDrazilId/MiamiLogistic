$('#menu_mobile_icon').click(function() {
    $('#menu_mobile').css({
        'display': 'block'
    });

    $('#menu_mobile_icon').css({
        'display': 'none'
    });

    $('#menu_mobile_cross').css({
        'display': 'block'
    });

    $('#reverseCall_BUTTON').css({
        'display': 'none'
    });
});

$('#menu_mobile_cross').click(function() {
    $('#menu_mobile').css({
        'display': 'none'
    });

    $('#menu_mobile_icon').css({
        'display': 'block'
    });

    $('#menu_mobile_cross').css({
        'display': 'none'
    });
    $('#reverseCall_BUTTON').css({
        'display': 'block'
    });
});

$('.menu_item').click(function() {
    $('#menu_mobile').css({
        'display': 'none'
    });

    $('#menu_mobile_icon').css({
        'display': 'block'
    });

    $('#menu_mobile_cross').css({
        'display': 'none'
    });
    
    $('#reverseCall_BUTTON').css({
        'display': 'block'
    });
});

/* GOVNOCODE INDUS STARTER PACK */

$('#screen__container--button').click(function() {
    $('#screen_form').css({
         'display': 'block'
    });
});

$('#reverseCall_BUTTON').click(function() {
    $('#screen_form').css({
         'display': 'block'
    });
});

$('.card_button').click(function() {
    $('#screen_form').css({
         'display': 'block'
    });
});

$('.card2_button').click(function() {
    $('#screen_form').css({
         'display': 'block'
    });
});

$('#close_form').click(function() {
    $('#screen_form').css({
         'display': 'none'
    });
});

/*END OF OVNOCODE */

$('#expand_block_signal').click(function() {
    $('#container_signal2').css({
         'height': 'auto',
         'overflow-y': 'visible'      
    });
    $('#expand_block_signal').css({
        'display': 'none'        
   });
});

$('#expand_block_zvuk').click(function() {
    $('#container_zvuk_2').css({
         'height': 'auto',
         'overflow-y': 'visible'      
    });
    $('#expand_block_zvuk').css({
        'display': 'none'        
   });
});

$('#expand_block_noize').click(function() {
    $('#container_noize_1').css({
         'height': 'auto',
         'overflow-y': 'visible'      
    });
    $('#expand_block_noize').css({
        'display': 'none'        
   });
});