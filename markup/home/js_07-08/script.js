$(function () {
    $('.tab').click(function () {
        var tabCurrent = $(this);
        var tabID = tabCurrent.attr('id');
        $('.content').removeClass('active');
        $('.tab').removeClass('activeTab');
        tabCurrent.addClass('activeTab');
        $('#block-' + tabID).addClass('active');
    });

    $('input').hover(
        function () {
            $('#tip' + $(this).attr('class')).addClass('active');
        },
        function () {
            $('#tip' + $(this).attr('class')).removeClass('active');
        }
    );

    $('.container-form > button').click(function () {
        $('.tip').addClass('active');
    });
});