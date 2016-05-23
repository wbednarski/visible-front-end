import Ember from 'ember';

export default Ember.Controller.extend({
  currentYear: (new Date()).getFullYear()
});
