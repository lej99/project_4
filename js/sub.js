$(document).ready(function () {

    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.querySelector(".timer").innerHTML= hours + "시간 남음"
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".timer").innerHTML="지났어용"
        }
    }, 1000);

    $('.thumbnail').click(function(){
        var src = $(this).attr('src')
        var alt = $(this).attr('alt')
        $('.modal').show();
        $('.modal img').attr('src',src,'alt',alt)
        $('body').css('overflow','hidden');
    });
    
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
            $(this).siblings('button').addClass('plus');
        } else {
            $(this).css({'overflow':'hidden','height':'200px'});
            $(this).parent('div').addClass('plus');
            $(this).siblings('button').removeClass('plus');
        }
    });
    $('.data_btn').click(function(){
        if($(this).parent('div').hasClass('plus')){
            $(this).siblings('.data').css({'overflow':'visible','height':'auto'});
            $(this).parent('div').removeClass('plus');
            $(this).addClass('plus');
        } else {
            $(this).siblings('.data').css({'overflow':'hidden','height':'200px'});
            $(this).parent('div').addClass('plus');
            $(this).removeClass('plus');
        }
    });

    $('.hee').hide();
    $('.book_hee').hide();
    $('.profile > .authors > a').click(function(){
        $(this).addClass('active');
        $(this).siblings('a').removeClass('active');

        if($(this).hasClass('marcel')){
            $('.proust').show();
            $('.book_proust').show();
            $('.hee').hide();
            $('.book_hee').hide();
        } else {
            $('.hee').show();
            $('.book_hee').show();
            $('.proust').hide();
            $('.book_proust').hide();
        }
    });

    $('section.book  a').click(function(){
        $(this).addClass('active');
        $(this).siblings('a').removeClass('active');
    });

    $('div.pop').hide();
    $('.write_review>.stars>span').hover(function(){
        $('.write_review>h2').css('opacity','0');
        $('div.pop').show();
        $(this).css('background-position', '50% -45px');
        $(this).prevAll().css('background-position', '50% -45px');

        if ($(this).index() == 0){
            $('div.pop>span').text('별로예요');
        } else if ($(this).index() == 2){
            $('div.pop>span').text('그저 그래요');
        } else if ($(this).index() == 4){
            $('div.pop>span').text('보통이에요');
        } else if ($(this).index() == 6){
            $('div.pop>span').text('좋아요');
        } else if ($(this).index() == 8){
            $('div.pop>span').text('최고예요');
        };
    },function(){
        $('.write_review>h2').css('opacity','1');
        $('div.pop').hide();
        $(this).css('background-position', '50% top');
        $(this).prevAll().css('background-position', '50% top');
        $('div.pop>span').text('');
    });

    $('.write_review>form>textarea').click(function(){
        confirm('로그인 상태에서 가능합니다. 로그인 페이지로 이동합니다.');
    });

    $('ul.warning').hide();
    $('.review > .top button.review_warning').click(function(){
        if($('ul.warning').css('display')=='none'){
            $('ul.warning').show();
        } else {
            $('ul.warning').hide();
        }
    });

    var $spoiler = document.querySelector('div.spoiler');
    $spoiler.addEventListener('click', function() {
        $spoiler.classList.toggle('click');
    });
    $spoiler.querySelector('label').addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    $('.middle .catego > a').click(function(){
        $(this).addClass('select');
        $(this).siblings('a').removeClass('select');
        if ($(this).hasClass('buyer')){
            $('.buyer_select').show();
        } else {
            $('.buyer_select').hide();
        }
    });

    $('.middle .soon > a').click(function(){
        $(this).addClass('select');
        $(this).siblings('a').removeClass('select');
    });

    $('.review > .bottom > ul').hide();
    $('.review > .bottom > h6').click(function(){
        $(this).toggleClass('click');
        $(this).siblings('ul').slideToggle();
    });

});