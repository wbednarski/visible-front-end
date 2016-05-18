import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('registered-user-chart', 'Integration | Component | registered user chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{registered-user-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#registered-user-chart}}
      template block text
    {{/registered-user-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
