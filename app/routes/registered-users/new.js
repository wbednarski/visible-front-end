import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createRegisteredUser() {
      let registeredUser = this.store.createRecord('registered-user', {
        number: this.controller.get('number'),
        date: this.controller.get('date')
      });

      registeredUser.save().then(() => {
        this.transitionTo('registered-users');
      }, response => {
        if (response.errors) {
          console.error(response.message);
        }
      });
    }
  }
});
