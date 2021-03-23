import Model, { attr, hasMany, belongsTo } from '@ember-data/model';


export default class OrderModel extends Model {
  @belongsTo('employee') employee;
  @attr('date') dateCreation;
  @attr('string') itemsNumber;
  @hasMany('orderdetail') orderdetail;

  get count(){
    return this.orderdetail.length;
  }


}
