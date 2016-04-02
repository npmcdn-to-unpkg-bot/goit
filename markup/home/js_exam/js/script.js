$(function () {
    $('.bxslider.1').bxSlider();
    $('.bxslider.2').bxSlider({
        startSlide: 1
    });
    $('.bxslider.3').bxSlider({
        startSlide: 2
    });
    $(".main__search-button").on("click", function () {
        var dataObject;
        var searchItem = $('.main__search input').val();
        var results = document.querySelector(".main__dicsover-masonry");
        var masonryTarget = $('.main__dicsover-masonry');
        $.ajax({
            url: 'http://api.pixplorer.co.uk/image?word=' + searchItem + '&amount=9&size=m',
            dataType: "json",
            success: function (data) {
                dataObject = data;
                results.innerHTML = tmpl("item_tmpl", dataObject);
                console.log(results);
                masonryTarget.masonry({
                    itemSelector: '.grid-item',
                    columnWidth: 310,
                    percentPosition: true
                });
                masonryTarget.masonry('reloadItems');
                masonryTarget.masonry('layout');
            }
        });
    });
});

$(function () {
    var dataObject;
    var masonryTarget = $('.main__dicsover-masonry');
    $.ajax({
        url: 'http://api.pixplorer.co.uk/image?amount=9&size=m',
        dataType: "json",
        success: function (data) {
            dataObject = data;
            var results = document.querySelector(".main__dicsover-masonry");
            results.innerHTML = tmpl("item_tmpl", dataObject);
            masonryTarget.masonry({
                itemSelector: '.grid-item',
                columnWidth: 310,
                percentPosition: true
            });
        }
    });

});