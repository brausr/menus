import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {
            beers: [
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
            ],
            places: [
                { id: 1, name: 'Place 1', lat: 39.94376230, lng: -75.16759820, img: 'http://placehold.it/48x48', menu: [1, 2, 3] },
                { id: 2, name: 'Place 2', lat: 39.96207930, lng: -75.14112650, img: 'http://placehold.it/48x48', menu: [4] },
                { id: 3, name: 'Place 3', lat: 39.95016720, lng: -75.16260730, img: 'http://placehold.it/48x48', menu: [1, 2, 3, 4, 5, 6] },
                { id: 4, name: 'Place 4', lat: 39.95022100, lng: -75.16658300, img: 'http://placehold.it/48x48', menu: [2, 3] },
                { id: 5, name: 'Place 5', lat: 39.94131370, lng: -75.15246310, img: 'http://placehold.it/48x48', menu: [] }
            ]
        };
    }
});
