import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {
            id: 1,
            name: 'DirtWolf',
            desc: 'Darkly heroic, Humulus Lupulus (hops) have empowered brews with bite and character since the 11th century. DirtWolf is a tribute to these untamed vines which rise from the earth with the voracity of a “wolf among sheep.” Hops have made an assertive comeback in American craft brewing. Revel in the best U.S. varieties of hops, in their natural, whole flower form, as they bring a vital, pungent reality to the soul of a wild element in our dangerously satisfying DirtWolf Double IPA.',
            style: 'Imperial or Double India Pale Ale',
            available: 'Year Round',
            abv: 8.7,
            ibu: 70,
            srm: 9,
            brewery: ['Victory Brewing Company'],
            img: 'https://s3.amazonaws.com/brewerydbapi/beer/YTNQI4/upload_Gxu5u4-large.png',
            places: [
                { id: 1, name: 'Place A', updated: 1426701569, lat: 1234, lng: 1234, img: 'http://placehold.it/48x48', menu: [1, 2, 3] },
                { id: 2, name: 'Place B', updated: 1426701000, lat: 1234, lng: 1234, img: 'http://placehold.it/48x48', menu: [1] },
                { id: 3, name: 'Place C', updated: 1426700569, lat: 1234, lng: 1234, img: 'http://placehold.it/48x48', menu: [1, 2, 3, 4, 5] },
                { id: 4, name: 'Place D', updated: 1426700100, lat: 1234, lng: 1234, img: 'http://placehold.it/48x48', menu: [1, 2, 3, 7, 8, 9, 10] },
                { id: 5, name: 'Place E', updated: 1426691569, lat: 1234, lng: 1234, img: 'http://placehold.it/48x48', menu: [1, 2] },
            ]
        };
    }
});
