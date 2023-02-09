$(document).ready(function(){
    $('.ceo_info_hide').hide();
    $('.ceo_info>.btn').click(function(){
        $('.ceo_info_hide').toggle();
        $(this).find('svg').toggleClass('click');
    });
});