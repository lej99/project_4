$(document).ready(function () {

    //sub
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "소설 프랑스", size: 50 },
        headers: { Authorization: "KakaoAK 8313893b989950266cb7d14639361dd5" }
    }).done(function (msg) {

        for (var i = 0; i < 10; i++) {
            const addList = document.querySelector('.add_list_title');
            const span = addList.querySelectorAll('span');
            const a = addList.querySelectorAll('a');
            span[i].innerHTML += (i + 1) + '위'
            a[i].innerHTML += msg.documents[i].title
        };
    });

    for (var i = 0; i < 13; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "잃어버린 시간을 찾아서" + (i + 1), size: 50 },
            async: false,
            headers: { Authorization: "KakaoAK 8313893b989950266cb7d14639361dd5" }
        }).done(function (msg) {
            $('.book_contents_detail .set .thumbnail').eq(i).attr("src", msg.documents[0].thumbnail, "alt", msg.documents[0].title);
            $('.book_contents_detail .set .title').eq(i).text("잃어버린 시간을 찾아서 " + (i + 1));
        });
    };


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=person",
        data: { query: '마르셀 프루스트' },
        headers: { Authorization: "KakaoAK 8313893b989950266cb7d14639361dd5" }
    }).done(function (msg) {
        console.log(msg);
        for (var i = 0; i < 8; i++) {
            $('section.book .book_proust .img .thumbnail').eq(i).attr("src", msg.documents[i].thumbnail, "alt", msg.documents[i].title);
            $('section.book .book_proust .title').eq(i).text(msg.documents[i].title);
        };
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=purblisher",
        data: { query: '민음사' },
        headers: { Authorization: "KakaoAK 8313893b989950266cb7d14639361dd5" }
    }).done(function (msg) {
        console.log(msg);
        for (var i = 0; i < 8; i++) {
            $('section.book .book_hee .img .thumbnail').eq(i).attr("src", msg.documents[i].thumbnail, "alt", msg.documents[i].title);
            $('section.book .book_hee .title').eq(i).text(msg.documents[i].title);
        };
    });

    for (var i = 0; i < 13; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "잃어버린 시간을 찾아서" + (i + 1), size: 50 },
            async: false,
            headers: { Authorization: "KakaoAK 8313893b989950266cb7d14639361dd5" }
        }).done(function (msg) {
            $('.buy_together .img .thumbnail').eq(i).attr("src", msg.documents[0].thumbnail, "alt", msg.documents[0].title);
            $('.buy_together .title').eq(i).text(msg.documents[0].title);
            $('.buy_together .author').eq(i).text(msg.documents[0].authors[0]);
        });
    };

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=purblisher",
        data: { query: '민음사' },
        headers: { Authorization: "KakaoAK 8313893b989950266cb7d14639361dd5" }
    }).done(function (msg) {
        console.log(msg);
        for (var i = 0; i < 8; i++) {
            $('.read_together_one .img .thumbnail').eq(i).attr("src", msg.documents[i].thumbnail, "alt", msg.documents[i].title);
            $('.read_together_one .title').eq(i).text(msg.documents[i].title);
            $('.read_together_one .author').eq(i).text(msg.documents[i].authors[0]);
        };
    });


    $.get("./text/book_intro.txt", function (data) {
        $(".book_intro .data").html(data);
    });

    $.get("./text/purblisher_review.txt", function (data) {
        $(".purblisher_review .data").html(data);
    });

    $.get("./text/authors_intro.txt", function (data) {
        $(".authors_intro .data").html(data);
    });

    $.get("./text/book_list.txt", function (data) {
        $(".book_list .data").html(data);
    });

});