import Ember from 'ember';
import NotifyMixin from '../../mixins/notify';

export default Ember.Controller.extend(NotifyMixin, {

    actions: {

        // save a new place
        addPlace: function () {
            var place = this.get('model');

            // valid place
            if (place.get('isValid')) {
                place.save().then(() => {
                    this.transitionToRoute('place', place);
                }).catch(() => {
                    this.notify('error', 'An error occurred saving place');
                });
            }
        },

        // response from geocode
        addressObtained: function (response) {
            var status = response.status,
                model = this.get('model');

            if (status === 'OK') {
                // got a possible location
                if (response.results.length > 1) {
                    // TODO Did you mean? -> show modal
                    this.notify('info', 'Did you mean?');

                } else {
                    var result = response.results[0],
                        addressComponents = result.address_components,
                        geometry = result.geometry,
                        streetNumber = null,
                        route = null,
                        city = null,
                        state = null,
                        country = null,
                        zip = null;

                    // parse address components
                    Ember.$.each(addressComponents, function () {
                        var type = this.types[0];

                        if (type === 'street_number') {
                            streetNumber = this.short_name;
                        } else if (type === 'route') {
                            route = this.short_name;
                        } else if (type === 'locality') {
                            city = this.short_name;
                        } else if (type === 'administrative_area_level_1') {
                            state = this.short_name;
                        } else if (type === 'country') {
                            country = this.short_name;
                        } else if (type === 'postal_code') {
                            zip = this.short_name;
                        }
                    });

                    if (Ember.isEmpty(streetNumber)) {
                        this.notify('error', 'Please enter a more accurate address');
                        return;
                    }

                    model.set('address1', streetNumber + ' ' + route);
                    model.set('city', city);
                    model.set('state', state);
                    model.set('zip', zip);
                    model.set('country', country);

                    // lat/lng
                    model.set('latitude', geometry.location.lat);
                    model.set('longitude', geometry.location.lng);

                    // Google Place ID
                    model.set('googleId', result.place_id);
                }

            } else {
                // handle error
                if (status === 'ZERO_RESULTS') {
                    this.notify('error', 'Unable to find location');
                } else if (status === 'OVER_QUERY_LIMIT') {
                    this.notify('error', 'Query limit exceeded');
                } else {
                    this.notify('error', 'There was an error fetching location');
                }

                return;
            }
        }
    }
});
