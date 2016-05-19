import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {
  store: Ember.inject.service('store'),

  normalizeData() {
    let ids = [];
    let numbers = [];
    let dates = [];
    let numbersNormalized;
    let ratio = 0;
    let registeredUsersNormalized = [];
    let registeredUsers = this.get('store').peekAll('registered-user');
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

    this.set('normalizedData', registeredUsersNormalized);
    this.trigger('update');
  }
});
