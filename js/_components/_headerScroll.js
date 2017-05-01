chopstick.headerScroll =
{
    init: function()
    {
        var page = $(".js-page");
        var header = $(".js-header");
        var main = $(".js-main");
        var headerHeight = header.height();
        var mainTop = main.offset().top;
        var theHeight = mainTop - headerHeight;

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= theHeight) {
                page.addClass("has-scrolled");
            } else {
                page.removeClass("has-scrolled");
            }
        });
    }
};
