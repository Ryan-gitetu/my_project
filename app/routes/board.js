import Route from '@ember/routing/route';
import Abstractroute from './Abstractroute';
import RSVP from 'rsvp';

export default class BoardRoute extends Abstractroute {
  model() {

    this.redirect();
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
      // console.log(user.name);
      // return this.store.query('order',{filter: {idEmployee: user.id}})
      // .then((resultat) => {
      //   return resultat;
      // })
    }
  }
}
