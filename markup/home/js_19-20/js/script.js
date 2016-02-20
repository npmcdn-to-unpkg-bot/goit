(function ($) {
    $(function () {
        $('.jcarousel').jcarousel();
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function () {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function () {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);

(function ($) {
    var allPanels = $('.accordion > dd').hide();
    var firstPanelShow = $('.accordion > dt:first-child > a');
    firstPanelShow.parent().addClass('active-tab');
    firstPanelShow.parent().next().slideDown();
    $('.accordion > dt > a').click(function () {
        allPanels.slideUp();
        $('.accordion > dt').removeClass('active-tab');
        $(this).parent().addClass('active-tab');
        $(this).parent().next().slideDown();
        return false;
    });
})(jQuery);