import Route from '@ember/routing/route';
import Abstractroute from '../../Abstractroute';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionIndexAddRoute extends Abstractroute {


  model() {
    return {};
  }

  renderTemplate() {
    this.render({outlet: 'addSection'});
  }

  @action
  annuler() {
    this.transitionTo('section.index');
  }

  @action
  addSection(section) {
    let newSection = this.store.createRecord('section', section);
    newSection.save();
    this.transitionTo('section.index');
  }
}
