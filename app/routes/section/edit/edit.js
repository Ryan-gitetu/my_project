import Route from '@ember/routing/route';
import Abstractroute from '../../Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionEditEditRoute extends Abstractroute {

  idProduit;

  model(params) {
    this.idProduit = params.id;
    if (this.userAuth.user) {
      return RSVP.hash({
        employee: this.userAuth.user,
        products: this.store.findAll('product'),
        product: this.store.findRecord('product', this.idProduit)
      });
    }
    console.log(product.packs.length);
  }

  renderTemplate() {
    this.render({outlet: this.idProduit});
  }

  @action
  transtionto(product_id) {
    let tmp = this;
      this.transitionTo('section.edit').then(function(){
        tmp.transitionTo('section.edit.edit',product_id);
      });
  }

  @action
  annuler() {
    this.transitionTo('section.edit');
  }

  @action
  modifierProduit(produit) {
    produit.save();
    this.transitionTo('section.edit');
  }




}
