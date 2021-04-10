import Route from '@ember/routing/route';
import Abstractroute from '../../Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionEditEditSectionRoute extends Abstractroute {

  model(params) {
    console.log(params.id);
    if (this.userAuth.user) {
      return this.store.findRecord('section', params.id, {include: 'products'});
    }
  }

  renderTemplate() {
    this.render({outlet: 'editSection'});
  }

  @action
  annuler(section) {
    this.transitionTo('section.edit', section.get('id'));
  }

  @action
  editSection(section) {
    section.save();
    this.transitionTo('section.edit', section.get('id'));

  }
}
