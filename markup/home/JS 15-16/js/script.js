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

$(".search").one("keydown", function () {
    var value = $("input").val();
    var input = $(this).detach();
    $("header").append(input);
    $("header").addClass("h-results");
    $(".hide").hide();
    $("input").focus();
    $("section").css({
        "padding": "0",
        "margin": "15px 0 0px 110px"
    })
    $(".search button").css({
        "display": "initial"
    })
});

function startSearch() {
    var myKey = 'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg';
    $.getJSON('http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=' + myKey + '&rsz=large&q=' + encodeURIComponent($('input').val()) + '&callback=GoogleCallback&context=?',
        function (data) {
            var ul = document.createElement("ul");
            $.each(data.results, function (i, val) {
                var li = document.createElement("li");
                li.innerHTML = '<a href="' + +'" title="' + val.url + '" target="_blank">' + val.title + "</a>" + "<span>" + val.url + "</span>" + val.content;
                ul.appendChild(li);
            });
            $('.results').html(ul);
        });

}

$(function () {
    $('button').click(function (e) {
        e.preventDefault();
        startSearch();
    });
});

$(document).keypress(function (e) {

    if (e.which == 13) {

        startSearch();
    }
});

function GoogleCallback(func, data) {
    window[func](data);
}