$(document).ready(function(){

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "오늘" },
        headers: { Authorization: "KakaoAK 8313893b989950266cb7d14639361dd5" }
    }).done(function (msg) {

        for (var i = 0; i < 8; i++) {
            const bookToday = document.querySelector('#today_books > .book_slide');
            const a = bookToday.querySelectorAll('a');
            a[i].innerHTML += '<img src="' + msg.documents[i].thumbnail + '">'
        };
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "소설", size:50 },
        headers: { Authorization: "KakaoAK 8313893b989950266cb7d14639361dd5" }
    }).done(function (msg) {

        for (var i = 0; i < 18; i++) {
            const bookToday = document.querySelector('#now_books > .book_slide');
            const li = bookToday.querySelectorAll('ol>li');
            li[i].innerHTML += '<a href="#" class="thumbnail"><img src="' + msg.documents[i].thumbnail + '"></a>'
            + '<h4 class="num">' + (i+1) + '</h4>'
            + '<div><a href="#"><h4 class="title">' + msg.documents[i].title + '</h4></a>'
            + '<a href="#"><p class="authors">' + msg.documents[i].authors[0] + '</p></a>'
            + '<p class="stars"><svg fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="구매자 평균 별점"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0l1.812 3.303L11 4.025 8.446 6.759l.459 3.741L5.5 8.903 2.095 10.5l.459-3.74L0 4.002l3.688-.7L5.5 0z" fill="currentColor"></path></svg>'
            + '<span class="reviews">' + (Math.random() * (5 - 4) + 4).toFixed(1) + '</span>'
            + '<span>('+ Math.floor((Math.random() * (500 - 1) + 1)) +')</span></p></div>'
        };
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "새로", size:50 },
        headers: { Authorization: "KakaoAK 8313893b989950266cb7d14639361dd5" }
    }).done(function (msg) {

        for (var i = 0; i < 8; i++) {
            const bookToday = document.querySelector('#new_books > .book_slide');
            const li = bookToday.querySelectorAll('li');
            li[i].innerHTML += '<a href="#" class="thumbnail"><img src="' + msg.documents[i].thumbnail + '"></a>'
            + '<a href="#"><h4 class="title">' + msg.documents[i].title + '</h4></a>'
            + '<a href="#" class="authors"><p>' + msg.documents[i].authors[0] + '</p></a>'
            + '<p class="stars"><svg fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="구매자 평균 별점"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0l1.812 3.303L11 4.025 8.446 6.759l.459 3.741L5.5 8.903 2.095 10.5l.459-3.74L0 4.002l3.688-.7L5.5 0z" fill="currentColor"></path></svg>'
            + '<span class="reviews">' + (Math.random() * (5 - 4) + 4).toFixed(1) + '</span>'
            + '<span>('+ Math.floor((Math.random() * (5 - 1) + 1)) +')</span></p>'
        };
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "경제", size:50 },
        headers: { Authorization: "KakaoAK 8313893b989950266cb7d14639361dd5" }
    }).done(function (msg) {

        for (var i = 0; i < 18; i++) {
            const bookToday = document.querySelector('#best_books > .book_slide');
            const li = bookToday.querySelectorAll('ol>li');
            li[i].innerHTML += '<a href="#" class="thumbnail"><img src="' + msg.documents[i].thumbnail + '"></a>'
            + '<h4 class="num">' + (i+1) + '</h4>'
            + '<div><a href="#"><h4 class="title">' + msg.documents[i].title + '</h4></a>'
            + '<a href="#"><p class="authors">' + msg.documents[i].authors[0] + '</p></a>'
            + '<p class="stars"><svg fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="구매자 평균 별점"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0l1.812 3.303L11 4.025 8.446 6.759l.459 3.741L5.5 8.903 2.095 10.5l.459-3.74L0 4.002l3.688-.7L5.5 0z" fill="currentColor"></path></svg>'
            + '<span class="reviews">' + (Math.random() * (5 - 4) + 4).toFixed(1) + '</span>'
            + '<span>('+ Math.floor((Math.random() * (500 - 1) + 1)) +')</span></p></div>'
        };
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "운동", size:50 },
        headers: { Authorization: "KakaoAK 8313893b989950266cb7d14639361dd5" }
    }).done(function (msg) {

        for (var i = 0; i < 8; i++) {
            const bookToday = document.querySelector('#health_books > .book_slide');
            const li = bookToday.querySelectorAll('li');
            li[i].innerHTML += '<a href="#" class="thumbnail"><img src="' + msg.documents[i].thumbnail + '"></a>'
            + '<a href="#"><h4 class="title">' + msg.documents[i].title + '</h4></a>'
            + '<a href="#" class="authors"><p>' + msg.documents[i].authors[0] + '</p></a>'
            + '<p class="stars"><svg fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="구매자 평균 별점"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0l1.812 3.303L11 4.025 8.446 6.759l.459 3.741L5.5 8.903 2.095 10.5l.459-3.74L0 4.002l3.688-.7L5.5 0z" fill="currentColor"></path></svg>'
            + '<span class="reviews">' + (Math.random() * (5 - 4) + 4).toFixed(1) + '</span>'
            + '<span>('+ Math.floor((Math.random() * (5 - 1) + 1)) +')</span></p>'
        };
    });
    

});