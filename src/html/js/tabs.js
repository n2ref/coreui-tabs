$(document).ready(function() {
    $(document).click(function() {
        if ($('.tabs-container > ul .dropdown.open')[0]) {
            $('.tabs-container > ul .dropdown.open').removeClass('open');
        }
    });

    $('.tabs-container > ul .dropdown-toggle').click(function() {
        $(this).parent().toggleClass('open');
        return false;
    });
});