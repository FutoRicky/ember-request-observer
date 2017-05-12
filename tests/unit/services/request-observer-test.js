import { moduleFor, test } from 'ember-qunit';

moduleFor('service:request-observer', 'Unit | Service | request observer', {
  // Specify the other units that are required for this test.
  needs: ['service:ajax']
});


// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('it returns false if no request is in process', function(assert) {
  let service = this.subject();
  assert.equal(service.get('requestInProgress'), false);
});

test('it returns true if request is in process', function(assert) {
  let service = this.subject();
  for (let i = 0; i < 10; i++) {
    $.ajax('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=f92d016e67ca49a5a46c17d4b0fdd9a1');
    if (i > 0 && i < 9) {
      assert.equal(service.get('requestInProgress'), true);
    }
  }
});
