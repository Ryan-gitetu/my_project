import Route from '@ember/routing/route';
import Abstractroute from '../Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionIndexRoute extends Abstractroute {

    model() {
      if (this.userAuth.user) {
        return RSVP.hash({
          sections: this.store.findAll('section'),
          employee: this.userAuth.user,
        });
      }
    }

    @action
    board() {
        this.transitionTo('board');
    }

    @action
    delete(params) {
      console.log(params.id);
    }

}
