import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },

  actions: {
    destroyQuestion(question) {
      question.destroyRecord();
      this.transistionTo('index');
    }
  }
});
