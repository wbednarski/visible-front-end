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

    // populate array with data from store for model RegisteredUser
    registeredUsers.map(registeredUser => {
      if (registeredUser) {
        ids.push(registeredUser.get('id'));
        numbers.push(registeredUser.get('number'));
        dates.push(registeredUser.get('date'));
      }
    });

    // we need to have numbers normalized to 100% in order to show them on the chart
    ratio = Math.max(...numbers) / 100;
    numbersNormalized = numbers.map(number => (number / ratio).toFixed(2));

    // populate array that is used to feed the chart
    for (let i = 0; i < registeredUsersLength; i++) {
      registeredUsersNormalized.push({
        id: ids[i],
        number: numbers[i],
        date: dates[i],
        numberNormalized: numbersNormalized[i]
      });
    }

    // sort by date - DESC
    registeredUsersNormalized.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    this.set('normalizedData', registeredUsersNormalized);
    this.trigger('update');
  }
});
