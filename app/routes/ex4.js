import Route from '@ember/routing/route';
import Contacts from 'tds/classes/Contacts'
import { action } from '@ember/object';

export default class Ex4Route extends Route {

  model() {
    return new Contacts(this.store.findAll('contact'));
  }

  @action
  delete(contact) {
    contact.deleteRecord();
  }

  @action
  cancelDeletion(deleteds) {
    deleteds.rollbackAttributes();
  }
}
