import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | section/edit/delete', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:section/edit/delete');
    assert.ok(route);
  });
});
