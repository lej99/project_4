$(document).ready(function(){
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