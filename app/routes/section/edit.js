import Route from '@ember/routing/route';
import Abstractroute from '../Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionEditRoute extends Abstractroute {

  model(params) {
    if (this.userAuth.user) {
      return RSVP.hash({
        section: this.store.findRecord('section', params.id),
        employee: this.userAuth.user,
        products: this.store.query('product', {
           filter: { idSection: params.id },
         })
      });
    }
  }

  @action
  board() {
      this.transitionTo('board');
  }


}
