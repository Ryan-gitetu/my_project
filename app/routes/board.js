import Route from '@ember/routing/route';
import Abstractroute from './Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';


export default class BoardRoute extends Abstractroute {

  model() {

    let user = this.userAuth.user;
    console.log(user.name);
    if (user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetails',
        }),
        employee: user,
      });
    }
  }

  @action
  logout(){
    this.userAuth.logout();
    this.redirect();
  }
}
