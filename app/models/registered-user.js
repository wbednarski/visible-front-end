import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  number: attr('number'),
  date: attr('date')
});
