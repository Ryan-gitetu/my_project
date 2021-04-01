import Route from '@ember/routing/route';
import Abstractroute from '../../Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionEditAddProductRoute extends Abstractroute {

  act_section;
  newProduct;

  model() {
    if (this.userAuth.user) {
      this.newProduct = this.store.createRecord('product', {});
      //this.act_section = this.modelFor('section.edit');
      return RSVP.hash({
        employee: this.userAuth.user,
        section: this.act_section,
        product: this.newProduct
      });
    }
  }

  renderTemplate() {
    this.render({outlet: 'addProduct'});
  }

  @action
  annuler() {
    this.transitionTo('section.edit');
  }

  @action
  ajouterProduit(produit) {
    this.act_section.section.products.pushObject(produit);
    produit.save().then(() => {
      this.act_section.products.save();
    });

    this.transitionTo('section.edit');
  }
}
