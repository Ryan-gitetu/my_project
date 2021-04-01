import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | section/index/add', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:section/index/add');
    assert.ok(route);
  });
});
