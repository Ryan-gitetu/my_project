import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class TestNewRoute extends Route {
  model() {
    return this.store.createRecord('contact',{
      nom: 'Smith',
      prenom: 'John',
      email: 'test.test@gmail.com'
    });
  }

  @action
  save(model) {
    model.save().then(() => {
      this.transitionTo('testList')
    });
  }

}
