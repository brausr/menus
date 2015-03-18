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
                { id: 1, name: 'Beer A', verified: true, brewery: ['Victory Brewing Co'], abv: 8.5, style: 'India Pale Ale', img: 'http://placehold.it/48x48' },
                { id: 2, name: 'Beer B', verified: true, brewery: ['Samuel Adams'], abv: 4.0, style: 'American Light Lager', img: 'http://placehold.it/48x48' },
                { id: 3, name: 'Beer C', verified: false, brewery: ['Yards Brewing Co.'], abv: 9, style: 'Imperial Stout', img: 'http://placehold.it/48x48' },
                { id: 4, name: 'Beer D', verified: true, brewery: ['Goose Island'], abv: 5, style: 'ESB', img: 'http://placehold.it/48x48' },
                { id: 5, name: 'Beer E', verified: true, brewery: ['New Belgium'], abv: 4.7, style: 'Maibock', img: 'http://placehold.it/48x48' },
                { id: 6, name: 'Beer F', verified: true, brewery: ['Almanac'], abv: 5.1, style: 'Sour', img: 'http://placehold.it/48x48' },
                { id: 7, name: 'Beer G', verified: true, brewery: ['Dock Street'], abv: 3.5, style: 'Flemish Ale', img: 'http://placehold.it/48x48' },
                { id: 8, name: 'Beer H', verified: true, brewery: ['Stoudts Brewing Co.'], abv: 10.5, style: 'Russian Imperial Stout', img: 'http://placehold.it/48x48' },
                { id: 9, name: 'Beer I', verified: true, brewery: ['Boxcar Brewing'], abv: 6, style: 'Pale Ale', img: 'http://placehold.it/48x48' },
                { id: 10, name: 'Beer J', verified: true, brewery: ['Stone', 'Russian River'], abv: 4.8, style: 'Helles', img: 'http://placehold.it/48x48' }
            ]
        };
    }
});
