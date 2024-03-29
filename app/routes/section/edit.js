import Route from '@ember/routing/route';
import Abstractroute from '../Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionEditRoute extends Abstractroute {

  model(params) {
    if (this.userAuth.user) {
      return RSVP.hash({
        section: this.store.findRecord('section', params.id, {include: 'products'}),
        employee: this.userAuth.user,
      });
    }
  }

  @action
  deconnexion() {
    this.userAuth.logout();
    this.redirect();
  }

  @action
  board() {
      this.transitionTo('board');
  }

  @action
  toSection() {
      this.transitionTo('section.index');
  }

  @action
  transtionto(product_id) {
      this.transitionTo('section.edit');
      this.transitionTo('section.edit.edit',product_id);
  }

  async deleteProducts(products) {
    while (products.firstObject) {
      let p = products.firstObject;
      await p.destroyRecord();
    }
  }

  @action
  editSection(section) {
    this.transitionTo('section.edit.editSection', section.id);
  }

  @action
  deleteSection(section) {
    this.deleteProducts(section.products).then(() => {
      section.destroyRecord();
    });
    transitionTo('section.index');
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
