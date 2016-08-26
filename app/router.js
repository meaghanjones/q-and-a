import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question', {path: '/question/:question_id'});
  this.route('faq');
  this.route('food');
  this.route('animal');
  this.route('bug');
  this.route('nature');
});

export default Router;
