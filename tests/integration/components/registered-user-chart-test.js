import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('registered-user-chart', 'Integration | Component | registered user chart', {
  integration: true,
  registeredUsers: Ember.Object.extend({content: [Ember.Object.extend({id:1, number: 7576575, date: '2016-05-23'}).create()]}).create()
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{registered-user-chart}}`);

  assert.equal(this.$().text().trim(), '');
});
