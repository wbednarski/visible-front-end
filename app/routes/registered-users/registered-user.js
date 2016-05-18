import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteRegisteredUser(id) {
      let registeredUser = this.store.peekRecord('registered-user', id);
      registeredUser.destroyRecord().then(this.transitionTo('registered-users'));
    }
  }
});
