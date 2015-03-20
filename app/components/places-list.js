import Ember from 'ember';

export default Ember.Component.extend({

    // location - required
    latitude: null,
    longitude: null,

    // model
    places: null,

    // beer - optional
    beer: null,

    // default empty message
    emptyMsg: 'No places found :-(',

    // component inserted
    didInsertElement: function () {
        
    },

    actions: {

        // ...
    }
});
