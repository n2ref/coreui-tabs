$(document).ready(function() {
    $(document).click(function() {
        if ($('.coreui-tabs-container > ul .dropdown.open')[0]) {
            $('.coreui-tabs-container > ul .dropdown.open').removeClass('open');
        }
    });

    $('.coreui-tabs-container > ul .dropdown-toggle').click(function() {
        $(this).parent().toggleClass('open');
        return false;
    });
});