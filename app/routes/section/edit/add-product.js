import Route from '@ember/routing/route';
import Abstractroute from '../../Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionEditAddProductRoute extends Abstractroute {

  act_section;

  model() {
    if (this.userAuth.user) {
      this.act_section = this.modelFor('section.edit');
      return RSVP.hash({
        section: this.act_section.section,
        product: {},
        products: this.store.findAll('product')
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
  ajouterProduit(produit,section) {
    produit.section = section;
    let newProd = this.store.createRecord('product', produit);

    newProd.save().then(() => {
      this.transitionTo('section.edit',section.get('id'));
    });

  }
}
