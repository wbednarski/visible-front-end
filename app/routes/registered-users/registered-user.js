import Ember from 'ember';

export default Ember.Route.extend({
  normalizer: Ember.inject.service('registered-user-normalizer'),

  actions: {
    toggleEditRegisteredUser() {
      this.controller.toggleProperty('isEditing');
    },

    updateRegisteredUser(model) {
      model.save().then(() => {
        this.get('normalizer').normalizeData();
        this.send('toggleEditRegisteredUser');
      }, response => {
        if (response.errors) {
          console.error(response.message);
        }
      });
    },

    deleteRegisteredUser(model) {
      model.destroyRecord({}).then(() => {
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
