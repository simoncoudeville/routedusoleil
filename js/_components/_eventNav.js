var eventNavSettings;
chopstick.eventNav =
{
    settings:
    {
        container: $('.js-page'),
        trigger: $('.js-nav-trigger')
    },

    init: function()
    {
        // Initialize mobile nav settings
        eventNavSettings = chopstick.eventNav.settings;
        // Bind toggle events
        chopstick.eventNav.bindUIEvents();
    },

    bindUIEvents: function()
    {
        eventNavSettings.trigger.on('click', function() {
            chopstick.eventNav.toggleNavigation();
        });
    },

    // build mobile nav
    toggleNavigation: function()
    {
        eventNavSettings.container.toggleClass('has-visible-nav');
        eventNavSettings.trigger.toggleClass('is-active');
    }
};
