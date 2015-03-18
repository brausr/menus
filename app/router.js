import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    // places
    this.resource('places', function () {
      this.route('add');
    });

    this.resource('place', { path: 'place/:id' }, function () {
      this.route('edit');
    });

    // Favorites
    this.resource('favorites', function () {

    });

    // ...
});

export default Router;
