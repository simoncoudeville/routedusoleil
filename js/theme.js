var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        chopstick.loadObject(chopstick.mobileNav, 'chopstick.mobileNav');
        chopstick.loadObject(chopstick.hide, 'chopstick.hide');
        chopstick.loadObject(chopstick.toggle, 'chopstick.toggle');

        $(function() {
        //caches a jQuery object containing the header element
            var header = $(".js-header");
            var headerHeight = header.height();
            var theHeight = $(window).height() - headerHeight - 36;

            $(window).scroll(function() {
                var scroll = $(window).scrollTop();

                if (scroll >= theHeight) {
                    header.addClass("is-negative");
                } else {
                    header.removeClass("is-negative");
                }
            });
        });

        $('.js-wall').masonry({
            // options...
            itemSelector: '.js-wall-item',
            columnWidth: '.js-wall-sizer',
            percentPosition: true
        });

        $('.js-intro-carousel').flickity({
            // contain: true,
            // cellSelector: '.js-intro-carousel-item',
            // bgLazyLoad: true
            arrowShape: 'M83,45.9v8.1H32.8l23,23.2L50,83L17,50l33-33l5.8,5.8l-23,23.2H83z'
        });
    },

    /**
     * This function will load an object by a given name
     *
     * If the object doesn't exist no error will be thrown
     * But if object exists but doesn't have an init method it will throw an error
     *
     * If everything is ok we'll initiate the given object
     */
    loadObject: function(obj, name)
    {
        // create object based on a name
        // var objName = window[objName];

        // check if object exists
        if(typeof obj != 'undefined') {

            // check if object has a method init
            if (typeof obj.init == 'undefined') {
                // we will throw an error so the designer / developer know there's a problem
                throw new Error('ERROR: "' + name + '" does not have an init function');

            } else {
                // everything is fine so initiate
                obj.init();
            }
        }
    }
};
