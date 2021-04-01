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
    // let sectionSelected = this.store.findRecord('section', model.sectionSelected.id);
    console.log("c",model.product.name);
    let newProd = this.store.createRecord('product',{
      name: model.product.name,
      price: model.product.price,
      promotion: model.product.promotion,
      comments: model.product.comments,
      products: model.product.packs
    });

    model.sectionSelected.products.pushObject(newProd);

    newProd.save().then(() => {
      model.sectionSelected.save();
    })


    this.transitionTo('section.index');
  }
}
