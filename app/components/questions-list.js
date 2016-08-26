import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['timeStampQuestion:desc'],
  listOfQuestions: Ember.computed.sort('question.questions', 'sortBy'),

  updateQuestionForm: false,
  actions: {
    updateQuestionForm(){
      this.set('updateQuestionForm', true);
    },

    newUpdateHide(){
      this.set('updateQuestionForm', false);
    },

    updateQuestion(question){
      var params ={
        content: this.get('content'),
        photo: this.get('photo'),
        tag: this.get('tag')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
