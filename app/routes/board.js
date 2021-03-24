import Route from '@ember/routing/route';
import Abstractroute from './Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';


export default class BoardRoute extends Abstractroute {

  model() {
    if (this.userAuth.user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: this.userAuth.user.id },
          include: 'orderdetails',
        }),
        employee: this.userAuth.user,
      });
    }
  }

  @action
  logout(){
    this.userAuth.logout();
    this.redirect();
  }
}
