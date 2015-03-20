/* global moment:true */
import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin, {

  // basics
  name: DS.attr('string'),
  tag: DS.attr('string'),
  img: DS.attr('string', { defaultValue: 'http://placehold.it/80x80' }),
  googleId: DS.attr('string'),

  // status
  verified: DS.attr('boolean', { defaultValue: false }),
  created: DS.attr('number', { defaultValue: Math.round(new Date().getTime() / 1000.0) }),
  updated: DS.attr('number', { defaultValue: Math.round(new Date().getTime() / 1000.0) }),
  // TODO created by
  // TODO verify count (won't verify until count > verify count)
  // TODO delete count (won't delete until count > delete count)

  // address
  address1: DS.attr('string'),
  address2: DS.attr('string'),
  address3: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('string'),
  country: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),

  // contact
  phone: DS.attr('string'),

  // social
  url: DS.attr('string'),
  facebook: DS.attr('string'),
  googleplus: DS.attr('string'),
  twitter: DS.attr('string'),
  instagram: DS.attr('string'),
  pinterest: DS.attr('string'),

  // TODO hours

  // TODO menu

  // validations
  validations: {
      name: {
        presence: { message: 'Name is required' },
        length: { maximum: 255 }
      }
  },

  // computed properties

  // fuzzy time since updated
  sinceUpdated: function () {
    return moment.unix(this.get('created')).fromNow();
  }.property('created')
});
