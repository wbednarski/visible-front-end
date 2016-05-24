import { multiply } from 'visible-front-end/helpers/multiply';
import { module, test } from 'qunit';

module('Unit | Helper | multiply');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = multiply([42]);
  assert.ok(result);
});

test('it accepts 4 parameters', function(assert) {
  let result = multiply([423, 42, 56, 43]);
  let correctResult = 423 *42 * 56 * 43;
  assert.equal(result, correctResult);
});
