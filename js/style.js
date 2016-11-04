/**
 * Created by fay on 2016/11/5.
 */
$(document).ready(function () {
    $('body').keydown(function(event){
        if(event.which == 67){
            $('.cat_no').addClass('hold');
            $('.key_c').addClass('down');
        }

        if(event.which == 65){
            $('.cat_no').addClass('hold');
            $('.key_a').addClass('down');
        }

        if(event.which == 84){
            $('.cat_no').addClass('hold');
            $('.key_t').addClass('down');
        }
    })

    $('body').keyup(function(event){
        if(event.which == 67){
            $('.cat_no').removeClass('hold');
            $('.key_c').removeClass('down');
        }

        if(event.which == 65){
            $('.cat_no').removeClass('hold');
            $('.key_a').removeClass('down');
        }

        if(event.which == 84){
            $('.cat_no').removeClass('hold');
            $('.key_t').removeClass('down');
        }
    })
});