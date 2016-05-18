import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('registered-users', function() {
    this.route('registered-user', { path: ':registered-user_id' });
    this.route('new');
  });
});

export default Router;
