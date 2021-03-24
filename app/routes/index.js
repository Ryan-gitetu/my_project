import Route from '@ember/routing/route';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class IndexRoute extends Route {
  @service userAuth;

  model(){
    return {};
  } 

  @action
  login(user) {
    console.log(user.email);
    console.log(user.password);
    this.store.query('employee', {
       filter: { email: user.email },
     }).then((connected) => {
       if (connected.length) {
         connected = connected.firstObject;
         if (connected.password && connected.password === user.password) {
           this.userAuth.login(connected);
           this.transitionTo('board');
         }
       }
     });
  }

}
