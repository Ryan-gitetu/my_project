import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ex4', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ex4');
    assert.ok(route);
  });
});
