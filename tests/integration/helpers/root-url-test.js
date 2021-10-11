import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | root-url', function (hooks) {
  setupRenderingTest(hooks);

  test('it accepts urls with a leading slash', async function (assert) {
    this.set('inputValue', '/1234');
    await render(hbs`{{root-url this.inputValue}}`);
    assert.equal(this.element.textContent.trim(), '/1234');
  });

  test('it accepts urls witout a leading slash', async function (assert) {
    this.set('inputValue', '1234');
    await render(hbs`{{root-url this.inputValue}}`);
    assert.equal(this.element.textContent.trim(), '/1234');
  });
});
