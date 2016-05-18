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

    deleteRegisteredUser(model) {
      model.destroyRecord({}).then(this.transitionTo('registered-users'));
    }
  }
});
