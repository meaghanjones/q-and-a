import DS from 'ember-data';

export default DS.Model.extend({
  answerPersonName: DS.attr(),
  answer: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
  timeStampAnswer: DS.attr()
});
