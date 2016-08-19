import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('question');
    },
  });
