import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    this.get('normalizer').normalizeData();
    this.setRegisteredUsersData();
    this.get('normalizer').on('update', () => {
      this.setRegisteredUsersData();
    });
  },

  normalizer: Ember.inject.service('registered-user-normalizer'),

  SPACING: 34,
  BAR_HEIGHT: 30,

  setRegisteredUsersData() {
    this.set('registeredUsersNormalized', this.get('normalizer').normalizedData);
  },

  registeredUsersTotal: function() {
    return this.get('registeredUsers').get('content').length || 1;
  }.property()
});
