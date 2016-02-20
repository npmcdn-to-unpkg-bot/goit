/*     MENU         */

$(function () {
    $(".nav li").hover(
        function () {
            if ($(this).children().length > 1) {
                var dropdown = $(this).children("ul");
                var color = $.Color(dropdown.css('backgroundColor'));
                dropdown.animate({
                    backgroundColor: color.lightness('+=0.2')
                }, 200, function () {
                    dropdown.animate({
                        backgroundColor: color
                    }, 200);
                });
                dropdown.slideDown();
            }
        },
        function () {
            if ($(this).children().length > 1) {
                var dropdown = $(this).children("ul");
                var color = $.Color(dropdown.css('backgroundColor'));
                dropdown.animate({
                    backgroundColor: color.lightness('+=0.2')
                }, 200, function () {
                    dropdown.animate({
                        backgroundColor: color
                    }, 200);
                });
                dropdown.slideUp();
            }
        }
    )
});

/*     CHECKBOX     */

$(function () {
    $(".jscheck").click(
        function () {
            changeCheck($(this));
        });


    $(".jscheck").each(
        function () {
            changeCheckStart($(this));
        });

    function changeCheck(el) {
        var el = el,
            input = el.find("input").eq(0);
        if (!input.attr("disabled")) {
            if (!input.attr("checked")) {
                el.css("background-position", "0 -17px");
                input.attr("checked", true)
            } else {
                el.css("background-position", "0 0");
                input.attr("checked", false)
            }
        }
        return true;
    }

    function changeCheckStart(el) {

        var el = el,
            input = el.find("input").eq(0);

        if (input.attr("checked")) {
            el.css("background-position", "0 -17px");
        }

        if (input.attr("disabled")) {
            el.removeClass("jscheck");
            el.addClass("checkDisabled");
            if (input.attr("checked")) {
                el.css("background-position", "0 -17");
            }
        }

        return true;
    }

});

/*     JCAROUSEL     */

(function ($) {
    $(function () {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

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

/*     SELECT     */

$(function () {
    var params = {
        changedEl: "select",
        visRows: 5,
        scrollArrows: true
    }
    cuSel(params);
});