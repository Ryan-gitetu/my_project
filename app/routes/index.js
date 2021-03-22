import Route from '@ember/routing/route';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class IndexRoute extends Route {
  @service userAuth;
  @action
  login(email, password) {
    console.log(email);
    console.log(password);
    this.store.query('employee', {
       filter: {
         email: email
       },
     }).then((connected) => {
       console.log(connected);
       if (connected.length) {
         connected = connected.firstObject;
         if (connected.password && connected.password === password) {
           this.userAuth.login(connected);
           this.transitionTo('board');
         }
       }
     });
  }

}
