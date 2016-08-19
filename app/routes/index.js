import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('question');
    },

  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transistionTo('index');
    }
  }
  });
