import Ember from 'ember';

export default Ember.Mixin.create({

    // Notify the user with some message
    notify: function (type, message) {
        var defaultMessage = 'Greetings!';
        if (type === 'error') {
            defaultMessage = 'A server blew up somewhere';
        } else if (type === 'info') {
            defaultMessage = 'Just saying hello!';
        }

        Ember.$.snackbar({
            content: Ember.isEmpty(message) ? defaultMessage : message
        });
    }
});
