import Route from '@ember/routing/route';
import Abstractroute from '../../Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionIndexAddProductRoute extends Abstractroute {

  model() {
    if (this.userAuth.user) {
      return RSVP.hash({
        products: this.store.findAll('product'),
        sections: this.store.findAll('section', {include: 'products'}),
        product: {},
        sectionSelected: {}
      });
    }
  }

  renderTemplate() {
    this.render({outlet: 'addProduct'});
  }

  @action
  annuler(product) {
    this.transitionTo('section.index');
  }

  @action
  ajouterProduit(model) {
    model.product.section = model.sectionSelected;
    let newProd = this.store.createRecord('product',model.product);

    newProd.save().then(() => {
      this.transitionTo('section.index');
    });


  }
}
