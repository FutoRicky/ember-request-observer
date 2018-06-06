import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  requestObserver: service('request-observer'),
  ajax: service('ajax'),

  actions: {
    getSources() {

      // Making the same call 10 times to have a request in progress for more than a second
      for (let i = 0; i < 10; i++) {
        this.get('ajax').request('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=f92d016e67ca49a5a46c17d4b0fdd9a1')
        .then((response) => {
          this.set('data', response);
        });
      }
    }
  }

});
