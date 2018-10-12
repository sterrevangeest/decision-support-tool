import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dossiers', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dossiers');
    assert.ok(route);
  });
});
