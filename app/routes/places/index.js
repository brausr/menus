import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        // TODO find by location / region
        return this.store.find('place');
    }
});
