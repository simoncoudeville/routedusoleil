var subNavSettings;
chopstick.subNav =
{
    settings:
    {
        subNavTrigger: $('.js-subnav-trigger'),
        subNav: $('.js-subnav')
    },

    init: function()
    {
        subNavSettings = chopstick.subNav.settings;

        subNavSettings.subNavTrigger.click(function() {
            $(this).parent().toggleClass('has-open-subnav');
            return false;
        });

        $('html').click(function(e) {
            subNavSettings.subNavTrigger.parent().removeClass('has-open-subnav');
            e.stopPropagation();
        });

        subNavSettings.subNav.click(function(e) {
            e.stopPropagation();
        });
    }
};
