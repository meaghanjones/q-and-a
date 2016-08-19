import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  photo: DS.attr(),
  questionPersonName: DS.attr(),
  additionalNotes: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),
  timeStampQuestion: DS.attr()
});