import Ember from 'ember';

export function answersAmount(params) {
  var question = params[0];

  if (question.get('answers').get('length') === 1) {
    return Ember.String.htmlSafe('<i class="fa fa-comment-o" aria-hidden="true"></i>');
  } else if (question.get('answers').get('length') >= 2) {
      return Ember.String.htmlSafe('<i class="fa fa-comments-o" aria-hidden="true"></i>');
  } else if (question.get('answers').get('length') < 1) {
      return Ember.String.htmlSafe('<i class="fa fa-question-circle-o" aria-hidden="true"></i>');
  }
}

export default Ember.Helper.helper(answersAmount);
