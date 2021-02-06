import Route from '@ember/routing/route';
import Services from '../classes/Services';
import { datas } from '../data/datas';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class Ex2Route extends Route {
  @tracked nbrActive=0;

  model() {
    return new Services(datas);
  }

  @action
  toggleActive(service){
    if (service.active) {
      service.active = false
    } else {
      service.active = true;
    }
    console.log(service.active);
  }
}
