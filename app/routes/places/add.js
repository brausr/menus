import Ember from 'ember';

export default Ember.Route.extend({

    model: function () {
        var place = this.store.createRecord('place');
        return place;
    },

    actions: {

        // remove the model if the add action was cancelled
        willTransition: function (transition) {
            var model = this.get('currentModel');
            if (model && model.get('isDirty')) {
                model.deleteRecord();
            }

            this._super(transition);
        }
    }
});
