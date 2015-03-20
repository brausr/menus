import Ember from 'ember';
import NotifyMixin from '../../../mixins/notify';
import { module, test } from 'qunit';

module('NotifyMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var NotifyObject = Ember.Object.extend(NotifyMixin);
  var subject = NotifyObject.create();
  assert.ok(subject);
});
