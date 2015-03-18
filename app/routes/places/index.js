import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return [
            { id: 1, name: 'Place 1', updated: 1426701569, lat: 39.94376230, lng: -75.16759820, img: 'http://placehold.it/48x48', menu: [1, 2, 3] },
            { id: 2, name: 'Place 2', updated: 1426701000, lat: 39.96207930, lng: -75.14112650, img: 'http://placehold.it/48x48', menu: [4] },
            { id: 3, name: 'Place 3', updated: 1426700569, lat: 39.95016720, lng: -75.16260730, img: 'http://placehold.it/48x48', menu: [1, 2, 3, 4, 5, 6] },
            { id: 4, name: 'Place 4', updated: 1426700100, lat: 39.95022100, lng: -75.16658300, img: 'http://placehold.it/48x48', menu: [2, 3] },
            { id: 5, name: 'Place 5', updated: 1426691569, lat: 39.94131370, lng: -75.15246310, img: 'http://placehold.it/48x48', menu: [] }
        ];
    }
});
