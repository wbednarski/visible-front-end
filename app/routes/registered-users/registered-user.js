import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleEditRegisteredUser() {
      this.controller.toggleProperty('isEditing', true);
    },

    updateRegisteredUser(model) {
      model.save();
      this.send('toggleEditRegisteredUser');
    },

    deleteRegisteredUser(id) {
      let registeredUser = this.store.peekRecord('registered-user', id);
      registeredUser.destroyRecord({}).then(this.transitionTo('registered-users'));
    }
  }
});
