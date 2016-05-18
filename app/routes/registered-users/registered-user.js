import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleEditRegisteredUser() {
      this.controller.toggleProperty('isEditing', true);
    },

    updateRegisteredUser(model) {
      model.save().then(() => {
        this.send('toggleEditRegisteredUser');
      }, response => {
        if (response.errors) {
          console.error(response.message);
        }
      });
    },

    deleteRegisteredUser(model) {
      model.destroyRecord({}).then(() => {
        this.transitionTo('registered-users');
      }, response => {
        if (response.errors) {
          console.error(response.message);
        }
      });
    }
  }
});
