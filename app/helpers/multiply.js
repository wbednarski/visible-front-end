import Ember from 'ember';

export function multiply(numbers) {
  let result = 1;

  numbers.forEach(number => {
    result *= number;
  });

  return result;

}

export default Ember.Helper.helper(multiply);
