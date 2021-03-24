import Route from '@ember/routing/route';
import { action } from '@ember/object';
import Abstractroute from './Abstractroute';
import RSVP from 'rsvp';


export default class OrderRoute extends Abstractroute {

  model(params) {
    //console.log();
    let user = this.userAuth.user;
    if (user) {
      console.log(user.name);
      return RSVP.hash({
        order: this.store.findRecord('order', params.id , {include: 'orderdetails'}),
        product: this.store.findRecord('product', order.product)
        employee: user,
      })
    }
  }
}
