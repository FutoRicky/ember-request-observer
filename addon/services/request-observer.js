import Ember from 'ember';

export default Ember.Service.extend({

  init() {
    this._super(...arguments);

    const requestPropertyChange = () => {
      this.notifyPropertyChange('startStopProperty');
    };

    Ember.$(document).ajaxStart(requestPropertyChange);
    Ember.$(document).ajaxStop(requestPropertyChange);
  },

  requestInProgress: Ember.computed('startStopProperty', function() {
    return Ember.$.active !== 0;
  }),
});
