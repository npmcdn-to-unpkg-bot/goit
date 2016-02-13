(function () {
    $("input").focus();
    $(".search").css({
        "border": "1px solid #4d90fe"
    })
})();

$(".search").focusin(function () {
    $(this).css({
        "border": "1px solid #4d90fe"
    })
});

$(".search").focusout(function () {
    $(this).removeAttr("style");
});

function startSearch(text) {
    $(text).click(function () {
        console.log($("input").val());
    });
}

startSearch("button");