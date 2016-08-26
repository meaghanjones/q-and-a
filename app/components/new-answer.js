import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow(){
      this.set('addNewAnswer', true);
    },
    newAnswerHide(){
      this.set('addNewAnswer', false);
    },
    saveAnswer1(){

      var params = {
        answerPersonName: this.get('answerPersonName'),
        answer: this.get('answer'),
        question: this.get('question'),
        timeStampAnswer: moment().format("MMM Do YYYY, h:mm a")
      };
        this.set('addNewAnswer', false);
        this.sendAction('saveAnswer2', params);
        this.set('answerPersonName', "");
        this.set('answer', "");
      }
  }
});
