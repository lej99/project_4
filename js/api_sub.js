$(document).ready(function(){

    //sub
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "소설 프랑스", size:50 },
        headers: { Authorization: "KakaoAK 8313893b989950266cb7d14639361dd5" }
    }).done(function (msg) {

        for (var i = 0; i < 10; i++) {
            const addList = document.querySelector('.add_list_title');
            const span = addList.querySelectorAll('span');
            const a = addList.querySelectorAll('a');
            span[i].innerHTML += (i+1) + '위'
            a[i].innerHTML += msg.documents[i].title
        };
    });

    // $.ajax({
    //     method: "GET",
    //     url: "https://dapi.kakao.com/v3/search/book?target=title",
    //     data: { query: "잃어버린 시간을 찾아서 13" },
    //     headers: { Authorization: "KakaoAK 8313893b989950266cb7d14639361dd5" }
    // }).done(function (msg) {

    //     $('.info_img img.thumbnail').attr("src",msg.documents[0].thumbnail)
    //     .attr("alt",msg.documents[0].title)

    // });
});