$(document).ready(function () {

    function slide_opacity_next() {
        $('#slide .wrap a .slide_contents').eq(1).stop().animate({ 'opacity': 1 }, "slow", "swing");
        $('#slide .wrap a .slide_contents').slice(2).stop().css({ "opacity": 0 });
    }
    function slide_opacity_prev() {
        $('#slide .wrap a:first .slide_contents').stop().animate({ 'opacity': 1 }, "slow", "swing");
        $('#slide .wrap a .slide_contents').slice(1).stop().css({ "opacity": 0 });
    }

    $('#slide .wrap a:first .slide_contents').css({ 'opacity': 1 });
    $('#slide .wrap a:first').css({ "flex-grow": 1, "flex-basis": 0});
    $('#slide .wrap a').eq(1).css({ 'flex-grow': 0, 'flex-basis': '46px'});
    $('#slide .wrap a').eq(2).css({ 'flex-grow': 0, 'flex-basis': '46px'});
    $('#slide .wrap a').slice(3).css({ 'flex-grow': 0, 'flex-basis': 0});

    function slide_prev() {
        $('#slide .wrap a:last').prependTo('#slide .wrap').stop().animate({ 'flex-grow': 0, 'flex-basis': '46px' }, "slow", "swing");
        slide_opacity_prev()
        $('#slide .wrap a:first').stop().animate({ 'flex-grow': 1, 'flex-basis': 0 }, "slow", "swing");
        $('#slide .wrap a').eq(1).stop().animate({ 'flex-grow': 0, 'flex-basis': '46px' }, "slow", "swing");
        $('#slide .wrap a').eq(2).stop().animate({ 'flex-grow': 0, 'flex-basis': '46px' }, "slow", "swing");
        $('#slide .wrap a').slice(3).stop().animate({ 'flex-grow': 0, 'flex-basis': 0 }, "slow", "swing");
    }

    function slide_next() {
        slide_opacity_next();
        $('#slide .wrap a:first').stop().animate({ 'flex-grow': 0, 'flex-basis': 0 }, "slow", "swing");
        $('#slide .wrap a').eq(1).stop().animate({'flex-grow': 1, 'flex-basis': 0 }, "slow", "swing", function () {
            $('#slide .wrap a:first').appendTo('#slide .wrap');            
            $('#slide .wrap a').slice(3).stop().css({ 'flex-grow': 0, 'flex-basis': 0 });
        });
        $('#slide .wrap a').eq(2).stop().css({ 'flex-grow': 0, 'flex-basis': '46px' });
        $('#slide .wrap a').eq(3).stop().animate({ 'flex-grow': 0, 'flex-basis': '46px' },'slow','swing');
    }

    setInterval(slide_next, 5000);

    $('#slide .slide_btn .prev').click(function(){
        slide_prev();
    });

    $('#slide .slide_btn .next').click(function(){
        slide_next();
    });

    $('.book_slide_btn .prev').hide();

    $('#today .book_slide_btn .prev').click(function(){
        $(this).stop().fadeOut();
        $('#today_books>ul').stop().animate({'margin-left':'0'});
        $(this).siblings().stop().show();

    });

    $('#today .book_slide_btn .next').click(function(){
        $(this).stop().fadeOut();
        $('#today_books>ul').stop().animate({'margin-left':'-372px'});
        $(this).siblings().stop().show();
    });

    $('#now .book_slide_btn .prev').click(function(){
        $(this).stop().fadeOut();
        $('#now_books>ul').stop().animate({'margin-left':'0'});
        $(this).siblings().stop().show();

    });

    $('#now .book_slide_btn .next').click(function(){
        $(this).stop().fadeOut();
        $('#now_books>ul').stop().animate({'margin-left':'-1100px'});
        $(this).siblings().stop().show();
    });

    $('#new .book_slide_btn .prev').click(function(){
        $(this).stop().fadeOut();
        $('#new_books>ul').stop().animate({'margin-left':'0'});
        $(this).siblings().stop().show();

    });

    $('#new .book_slide_btn .next').click(function(){
        $(this).stop().fadeOut();
        $('#new_books>ul').stop().animate({'margin-left':'-372px'});
        $(this).siblings().stop().show();
    });

    $('#best .book_slide_btn .prev').click(function(){
        $(this).stop().fadeOut();
        $('#best_books>ul').stop().animate({'margin-left':'0'});
        $(this).siblings().stop().show();

    });

    $('#best .book_slide_btn .next').click(function(){
        $(this).stop().fadeOut();
        $('#best_books>ul').stop().animate({'margin-left':'-1100px'});
        $(this).siblings().stop().show();
    });

    $('#health .book_slide_btn .prev').click(function(){
        $(this).stop().fadeOut();
        $('#health_books>ul').stop().animate({'margin-left':'0'});
        $(this).siblings().stop().show();

    });

    $('#health .book_slide_btn .next').click(function(){
        $(this).stop().fadeOut();
        $('#health_books>ul').stop().animate({'margin-left':'-372px'});
        $(this).siblings().stop().show();
    });

});