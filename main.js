$(function () {

    let post = $(".post");
    let mainDiv = post.find("div");
    mainDiv.hover(
        function (e) {
        $(this).siblings("img").css("transform","scale(3)");

    },
        function (e) {
            $(this).siblings("img").css("transform","scale(1)");

    })


})