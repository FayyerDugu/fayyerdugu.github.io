$(document).ready(function() {
    tonav();

    $(document).on('pjax:complete', tonav);

    function tonav() {
        // Initially hide #name-container and show .menus_items
        $("#name-container").removeClass('show');
        $(".menus_items").eq(1).addClass('show');

        let position = $(window).scrollTop();

        $(window).scroll(function() {
            let scroll = $(window).scrollTop();

            if (scroll > position) {
                // Scrolling down
                $("#name-container").addClass('show');
                $(".menus_items").eq(1).removeClass('show');
            } else if (scroll < position) {
                // Scrolling up
                $(".menus_items").eq(1).addClass('show');
                $("#name-container").removeClass('show');
            }
            position = scroll;
        });

        let pageTitle = document.title.split(' | ')[0];
        $("#page-name").text(pageTitle);
    }
});

function scrollToTop() {
    $(".menus_items").eq(1).addClass('show');
    $("#name-container").removeClass('show');
    btf.scrollToDest(0, 500);
}
