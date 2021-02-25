import Model from '@ember-data/model';
import Model, { hasMany } from '@ember-data/model';

export default class CategoryModel extends Model {
  @attr name;
  @hasMany('contacts') contact;

  
}
