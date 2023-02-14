$(document).ready(function(){

    $('.search').hide();
    $('#search input').focus(function(){
        $('.search').show();
    });
    $('html').click(function(e){
        if(!$(e.target).hasClass('click')) {
            $('.search').hide();
        }
    });

    $('.search_on span').click(function(){        
        if($(this).hasClass('off')) {
            $(this).text('검색어 저장 끄기');
            $('.search_event p').text('최근 검색어 내역이 없습니다.');
            $(this).removeClass('off');
        } else {
            $(this).text('검색어 저장 켜기');
            $('.search_event p').text('검색어 저장기능이 꺼져있습니다.');
            $(this).addClass('off');
        }
    });

    $('.ceo_info_hide').hide();
    $('.ceo_info>.btn').click(function(){
        $('.ceo_info_hide').toggle();
        $(this).find('svg').toggleClass('click');
    });

    $('.top_btn').click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.top_btn').fadeIn();
        } else {
            $('.top_btn').fadeOut();
        }
    });
});