import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow(){
      this.set('addNewQuestion', true);
    },
    newQuestionHide(){
      this.set('addNewQuestion', false);
    },
    saveQuestion1(){
      var params = {
        content: this.get('content'),
        photo: this.get('photo'),
        questionPersonName: this.get('questionPersonName'),
        tag: this.get('tag'),
        timeStampQuestion: moment().format("MMM Do YYYY, h:mm a")
      };
        this.set('addNewQuestion', false);
        this.sendAction('saveQuestion2', params);
        this.set('content', "");
        this.set('photo', "");
        this.set('questionPersonName', "");
      }
  }
});
