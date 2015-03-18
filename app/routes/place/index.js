import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {
            id: 3,
            name: 'Place Name',
            lat: 39.95016720,
            lng: -75.16260730,
            img: 'http://placehold.it/150x48',
            menu: [
                { id: 1, name: 'Beer A', style: 'IPA', img: 'http://placehold.it/48x48' },
                { id: 2, name: 'Beer B', style: 'IPA', img: 'http://placehold.it/48x48' },
                { id: 3, name: 'Beer C', style: 'IPA', img: 'http://placehold.it/48x48' },
                { id: 4, name: 'Beer D', style: 'IPA', img: 'http://placehold.it/48x48' },
                { id: 5, name: 'Beer E', style: 'IPA', img: 'http://placehold.it/48x48' },
                { id: 6, name: 'Beer F', style: 'IPA', img: 'http://placehold.it/48x48' },
                { id: 7, name: 'Beer G', style: 'IPA', img: 'http://placehold.it/48x48' },
                { id: 8, name: 'Beer H', style: 'IPA', img: 'http://placehold.it/48x48' },
                { id: 9, name: 'Beer I', style: 'IPA', img: 'http://placehold.it/48x48' },
                { id: 10, name: 'Beer J', style: 'IPA', img: 'http://placehold.it/48x48' }
            ]
        };
    }
});
