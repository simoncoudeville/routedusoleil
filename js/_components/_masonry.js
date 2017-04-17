var masonrySettings;
chopstick.masonry =
{
    settings:
    {
        wall: $('.js-wall'),
        appendTrigger: $('.js-append-button')
    },

    init: function()
    {
        masonrySettings = chopstick.masonry.settings;
        chopstick.masonry.buildTheWall();
        chopstick.masonry.appendToTheWall();
    },

    buildTheWall: function()
    {
        masonrySettings.wall.masonry({
            itemSelector: '.js-wall-item',
            columnWidth: '.js-wall-sizer',
            percentPosition: true,
            hiddenStyle: {
                transform: 'translateY(100px)',
                opacity: 0
            },
            visibleStyle: {
                transform: 'translateY(0px)',
                opacity: 1
            }
        });
    },

    appendToTheWall: function()
    {
        masonrySettings.appendTrigger.on( 'click', function() {
            jQuery.get('boxes.html', function( data ) {
                // Make jQuery object from HTML string
                var moreItems = jQuery( data ).filter('.js-wall-item');
                // Append new blocks
                jQuery(masonrySettings.wall).append( moreItems );
                // Have Masonry position new blocks
                jQuery(masonrySettings.wall).masonry( 'appended', moreItems );
                // make sure modaal works after items are loaded
                moreItems.imagesLoaded().progress( function() {
                    chopstick.loadObject(chopstick.modaals, 'chopstick.modaals');
                });
            });
        });
    }
};
