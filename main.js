$(function () {
    let navBtn = $("#navBtn");
    let nav = $("#nav");
    let navCounter = 1;

    navBtn.click(function (e) {
        e.preventDefault();
        navCounter ++;
        if(navCounter % 2 == 0){
            nav.css("height","100%");
        }else{
            nav.css("height","0");
            navCounter = 1;
        }
    })


})