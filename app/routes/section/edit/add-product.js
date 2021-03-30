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
        employee: this.userAuth.user,
        section: this.act_section
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
    let newProduit = this.store.createRecord('product',produit);
    newProduit.save().then((product) => {
      this.act_section.section.get('products').pushObject(product);
    });

    this.transitionTo('section.edit');
  }
}
