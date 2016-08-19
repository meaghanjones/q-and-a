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
      var currentMonth = moment().month() + 1;
      var timeStampQuestion =
      currentMonth + "/" + moment().month() + "/" + moment().year();

      var params = {
        content: this.get('content'),
        photo: this.get('photo'),
        questionPersonName: this.get('questionPersonName'),
        timeStampQuestion: timeStampQuestion
      };
        this.set('addNewQuestion', false);
        this.sendAction('saveQuestion2', params);
        this.set('content', "");
        this.set('photo', "");
        this.set('questionPersonName', "");

    }
  }
});
