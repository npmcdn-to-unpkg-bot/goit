$(function () {
    $('.bxslider.1').bxSlider();
    $('.bxslider.2').bxSlider({
        startSlide: 1
    });
    $('.bxslider.3').bxSlider({
        startSlide: 2
    });
});

$(function () {
    var dataObject;
    $.ajax({
        url: 'http://api.pixplorer.co.uk/image?word=night&amount=9&size=tb',
        dataType: "json",
        success: function (data) {
            dataObject = data;
            var results = document.querySelector(".main__dicsover-masonry");
            results.innerHTML = tmpl("item_tmpl", dataObject); 
            $('.main__dicsover-masonry').masonry({
                itemSelector: '.grid-item',
                columnWidth: 310,
                percentPosition: true
            });
        }
    });

});