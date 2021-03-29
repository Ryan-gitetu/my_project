import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('string') price;
  @attr('string') image;
  @belongsTo('section') section;
  @hasMany('product', { inverse: null }) packs;
}
