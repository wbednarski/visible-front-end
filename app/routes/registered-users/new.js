import Ember from 'ember';

export default Ember.Route.extend({
  normalizer: Ember.inject.service('registered-user-normalizer'),

  actions: {
    createRegisteredUser() {
      let registeredUser = this.store.createRecord('registered-user', {
        number: this.controller.get('number'),
        date: this.controller.get('date')
      });

      registeredUser.save().then(() => {
        this.get('normalizer').normalizeData();
        this.transitionTo('registered-users');
      }, response => {
        if (response.errors) {
          console.error(response.message);
        }
      });
    }
  }
});
