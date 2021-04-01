import Route from '@ember/routing/route';
import Abstractroute from '../Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionIndexRoute extends Abstractroute {

    model() {
      if (this.userAuth.user) {
        //this.newSection = this.store.createRecord('section', {});
        return RSVP.hash({
          //section: this.newSection,
          sections: this.store.findAll('section'),
          employee: this.userAuth.user
        });
      }
    }

    @action
    board() {
        this.transitionTo('board');
    }

    async deleteProducts(products) {
      while (products.firstObject) {
        let p = products.firstObject;
        await p.destroyRecord();
      }
    }

    @action
    deleteSection(section) {
      this.deleteProducts(section.products).then(() => {
        section.destroyRecord();
      });

    }

    @action
    addSection(section) {
      this.transitionTo('section.index.add');
    }

    @action
    addProduit(section) {
      this.transitionTo('section.index.add-product');
    }

}
