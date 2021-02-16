import Route from '@ember/routing/route';
import Contacts from 'tds/classes/Contacts'

export default class Ex4Route extends Route {

  model() {
    return new Contacts(this.store.findAll('contact'));
  }
}
