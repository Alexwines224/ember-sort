import { moduleForModel, test } from 'ember-qunit';

moduleForModel('design', 'Unit | Model | design', {
  // Specify the other units that are required for this test.
  needs: ['model:slice']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
