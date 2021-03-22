import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | indexx', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:indexx');
    assert.ok(route);
  });
});
