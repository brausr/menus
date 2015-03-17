import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        // TODO grab from store / Google places
        return [
          {title: "Home", lat: 40.02260000, lng: -75.21445400, desc: "Here is B&H's home", menu: [] },
          {title: "Shop", lat: 39.93982100, lng: -75.15745300, desc: "Here is B&H's shop", menu: [1, 2, 3] },
          {title: "Hays", lat: 39.93039510, lng: -75.14955620, desc: "Here is Hay's shop", menu: [2, 3, 4, 5, 6] }
        ];
    }
});
