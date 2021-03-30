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

  @action
  transtionto(product_id) {
      this.transitionTo('section.edit');
      this.transitionTo('section.edit.edit',product_id);
  }

  @action
  delete(product) {
    product.deleteRecord();
    product.save();
  }

  @action
  add(section_id) {
    this.transitionTo('section.edit.add-product');
  }


}
