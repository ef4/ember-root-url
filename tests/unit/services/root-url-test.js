import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('RootURL Service', function(hooks) {
  setupTest(hooks);

  test("build prepends the application's rootURL", function(assert) {
    const service = this.owner.lookup('service:root-url');
    assert.equal(service.build('/some/path.png'), '/some/path.png', 'root-relative')
    assert.equal(service.build('another/path.gif'), '/another/path.gif', 'relative')
  });
});
