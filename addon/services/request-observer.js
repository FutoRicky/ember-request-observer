import Service from '@ember/service';
import { computed } from '@ember/object';
import $ from 'jquery';


export default Service.extend({

  init() {
    this._super(...arguments);

    const requestPropertyChange = () => {
      this.notifyPropertyChange('startStopProperty');
    };

    $(document).ajaxStart(requestPropertyChange);
    $(document).ajaxStop(requestPropertyChange);
  },

  requestInProgress: computed('startStopProperty', function() {
    return $.active !== 0;
  }),
});
