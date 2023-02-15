$(document).ready(function () {

    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        $(".timer").html(hours + "시간 남음");
        if (distance < 0) {
            clearInterval(x);
            $(".timer").html("지났어용");
        }
    }, 1000);

    $('.thumbnail').click(function(){
        var src = $(this).attr('src')
        var alt = $(this).attr('alt')
        $('.modal').show();
        $('.modal img').attr('src',src,'alt',alt)
        $('body').css('overflow','hidden');
    });
    
    $('.modal').hide();
    $('.modal').click(function(){
        $(this).hide();
        $('.modal img').attr('src','','alt','')
        $('body').css('overflow','visible');
    });

    $('.book_contents_detail .set .hide').hide();
    $('.book_contents_detail .set > button').click(function(){
        $(this).hide();
        $('.book_contents_detail .set .hide').show();
    });
    
    $('.data').click(function(){
        if($(this).parent('div').hasClass('plus')){
            $(this).css({'overflow':'visible','height':'auto'});
            $(this).parent('div').removeClass('plus');
        } else {
            $(this).css({'overflow':'hidden','height':'200px'});
            $(this).parent('div').addClass('plus');
        }
    });

});