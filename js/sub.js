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

    $('.info_img .img img').click(function(){
        $('.modal').show();
        $('body').css('overflow','hidden');
    });
    
    $('.modal').hide();
    $('.modal').click(function(){
        $(this).hide();
        $('body').css('overflow','visible');
    });

});