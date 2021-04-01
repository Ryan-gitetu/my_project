import Route from '@ember/routing/route';
import Abstractroute from '../../Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionIndexAddProductRoute extends Abstractroute {

  model() {
    if (this.userAuth.user) {
      return RSVP.hash({
        section: this.store.findAll('section'),
        product: {}
      });
    }
  }

  renderTemplate() {
    this.render({outlet: 'addProduct'});
  }

  @action
  annuler() {
    this.newProduct.destroyRecord();
    this.transitionTo('section.index');
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
