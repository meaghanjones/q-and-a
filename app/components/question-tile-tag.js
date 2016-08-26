import Ember from 'ember';

export default Ember.Component.extend({
  viewLater: Ember.inject.service(),

  actions: {
    addToLater(item) {
      this.get('viewLater').add(item);
    }
  }
});
