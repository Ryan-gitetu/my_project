import Route from '@ember/routing/route';
import Abstractroute from './Abstractroute';
import RSVP from 'rsvp';

export default class BoardRoute extends Abstractroute {
  model() {
    this.redirect();
    let user = this.userAuth.user;
    if (user) {
      return this.store.query('order',{filter: {idEmployee: user.id}})
      .then((resultat) => {
        return resultat
      })
    }
  }
}
