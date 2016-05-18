import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('registered-user').then((response) => {
      return response;
    }, response => {
      if (response.errors) {
        console.error(response.message);
      }
    });
  }
});
