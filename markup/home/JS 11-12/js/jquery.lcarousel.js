(function ($) {
    $.fn.lCarousel = function (options) {
        var defaults = {
            left: '.carousel-arrow-left',
            right: '.carousel-arrow-right',
            hider: '.carousel-hider',
            list: '.carousel-list',
            element: '.carousel-element'
        }

        var settings = $.extend(defaults, options);

        var $leftUIEl = $(settings.left);
        var $rightUIEl = $(settings.right);
        var $elementsList = $(settings.list);
        var $element = $(settings.element);
        var $hider = $(settings.hider);

        var pixelsOffset = parseInt($element.width(), 10) + parseInt($element.css("margin-right"), 10);
        var currentLeftValue = 0;
        var elementsCount = $elementsList.find('li').length;
        var elementsShow = Math.ceil(parseInt($hider.width(), 10) / pixelsOffset);
        var minimumOffset = -((elementsCount - elementsShow) * pixelsOffset);
        var maximumOffset = 0;

        console.log(Math.ceil(parseInt($hider.width(), 10) / pixelsOffset));

        $leftUIEl.click(function () {
            console.log("tap left");
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += pixelsOffset;
                $elementsList.animate({
                    left: currentLeftValue + "px"
                }, 500);
            }
        });

        $rightUIEl.click(function () {
            console.log("tap right");
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= pixelsOffset;
                $elementsList.animate({
                    left: currentLeftValue + "px"
                }, 500);
            }
        });

        return this;
    };
})(jQuery);