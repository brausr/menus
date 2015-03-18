import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {
            id: 1,
            name: 'Beer Name',
            desc: 'A world class beer',
            style: 'IPA',
            abv: 6.5,
            brewery: 'Some Brewing Co.',
            img: 'http://placehold.it/150x48',
            places: [
                { id: 1, name: 'Place A', lat: 1234, lng: 1234, img: 'http://placehold.it/48x48', menu: [1, 2, 3] },
                { id: 2, name: 'Place B', lat: 1234, lng: 1234, img: 'http://placehold.it/48x48', menu: [1] },
                { id: 3, name: 'Place C', lat: 1234, lng: 1234, img: 'http://placehold.it/48x48', menu: [1, 2, 3, 4, 5] },
                { id: 4, name: 'Place D', lat: 1234, lng: 1234, img: 'http://placehold.it/48x48', menu: [1, 2, 3, 7, 8, 9, 10] },
                { id: 5, name: 'Place E', lat: 1234, lng: 1234, img: 'http://placehold.it/48x48', menu: [1, 2] },
            ]
        };
    }
});
