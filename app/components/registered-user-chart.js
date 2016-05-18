import Ember from 'ember';

export default Ember.Component.extend({
  SPACING: 34,
  BAR_HEIGHT: 30,

  registeredUsersDidChange: Ember.observer('registeredUsers.content.@each', function () {
    let ids = [];
    let numbers = [];
    let dates = [];
    let numbersNormalized;
    let ratio = 0;
    let registeredUsersNormalized = [];
    let registeredUsers = this.get('registeredUsers');
    let registeredUsersLength = registeredUsers.get('content').length;

    registeredUsers.map(registeredUser => {
      if (registeredUser) {
        ids.push(registeredUser.get('id'));
        numbers.push(registeredUser.get('number'));
        dates.push(registeredUser.get('date'));
      }
    });

    ratio = Math.max(...numbers) / 100;
    numbersNormalized = numbers.map(number => (number / ratio ? number / ratio : 10).toFixed(2));

    for (let i = 0; i < registeredUsersLength; i++) {
      registeredUsersNormalized.push({
        id: ids[i],
        number: numbers[i],
        date: dates[i],
        numberNormalized: numbersNormalized[i]
      });
    }

    this.set('registeredUsersNormalized', registeredUsersNormalized);

  }).on('init'),

  registeredUsersTotal: function() {
    return this.get('registeredUsers').get('content').length || 1;
  }.property()
});
