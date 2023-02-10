$(document).ready(function () {
    $('#slide .wrap a:first').css({ "flex-grow": 1, "flex-basis": 0 });
    $('#slide .wrap a').eq(1).css({ 'flex-grow': 0, 'flex-basis': '46px' });
    $('#slide .wrap a').eq(2).css({ 'flex-grow': 0, 'flex-basis': '46px' });
    $('#slide .wrap a').slice(3).css({ 'flex-grow': 0, 'flex-basis': 0 });

    function prev() {
        $('#slide .wrap a:last').prependTo('#slide .wrap').stop().animate({ 'flex-grow': 0, 'flex-basis': '46px' }, "slow", "swing");
        $('#slide .wrap a:first').stop().animate({ 'flex-grow': 1, 'flex-basis': 0 }, "slow", "swing");
        $('#slide .wrap a').eq(1).stop().animate({ 'flex-grow': 0, 'flex-basis': '46px' }, "slow", "swing");
        $('#slide .wrap a').eq(2).stop().animate({ 'flex-grow': 0, 'flex-basis': '46px' }, "slow", "swing");
        $('#slide .wrap a').slice(3).css({ 'flex-grow': 0, 'flex-basis': 0 });
    }

    function next() {
        $('#slide .wrap a:first').stop().animate({ 'flex-grow': 0, 'flex-basis': 0 }, "slow", "swing");
        $('#slide .wrap a').eq(1).stop().animate({ 'flex-grow': 1, 'flex-basis': 0 }, "slow", "swing", function () {
            $('#slide .wrap a:first').appendTo('#slide .wrap');
            $('#slide .wrap a').eq(1).css({ 'flex-grow': 0, 'flex-basis': '46px' });
            $('#slide .wrap a').eq(2).css({ 'flex-grow': 0, 'flex-basis': '46px' });
            $('#slide .wrap a').slice(3).css({ 'flex-grow': 0, 'flex-basis': 0 });
        });
    }

    setInterval(next, 5000);

    $('#slide .slide_btn .prev').click(function(){
        prev();
    });

    $('#slide .slide_btn .next').click(function(){
        next();
    });

});