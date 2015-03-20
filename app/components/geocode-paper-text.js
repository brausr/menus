import Ember from 'ember';
import PaperText from 'ember-paper/components/paper-text';
import config from '../config/environment';

export default PaperText.extend({

    // timer used to perform geocode
    timer: null,

    // user input delay until timer executes
    delay: 350,

    // the user text input
    address: null,

    // geocode request in progress
    working: false,

    // the geocoded address
    geocoded: null,

    // key up action
    keyUp: function () {
        clearTimeout(this.get('timer'));
        this.set('timer', setTimeout(() => {
            this.geocode();
        }, this.get('delay')));
    },

    // key down action
    keyDown: function () {
        clearTimeout(this.get('timer'));
    },

    // perform geocode of user input
    geocode: function () {
        var address = this.get('address'),
            apiKey = config.googleMap.apiKey,
            url = 'https://maps.googleapis.com/maps/api/geocode/json';

        if (!Ember.isEmpty(address)) {
            // working
            this.set('working', true);

            // build url
            url += '?address=' + this.get('address');
            url += '&key=' + apiKey;

            // issue request
            Ember.$.getJSON(url).then((response) => {
                // basic error handling
                this.set('geocoded', response.status === 'OK');
                this.set('working', false);

                // delegate the response
                this.get('target').send('addressObtained', response);
            });
        } else {
            this.set('working', false);
            this.set('geocoded', false);
        }
    }

});
