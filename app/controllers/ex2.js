import Controller from '@ember/controller';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { datas } from '../data/datas';


export default class Ex2Controller extends Controller {

@tracked nbrActive = "1";
@tracked total = 300;

  @action
  toggleActive(service){
    var cpmt =0;
    datas.forEach(value => {

      if (value.name === service) {
        if (!value.active) {
          this.total += value.price;
        } else {
          this.total -= value.price;
        }
        value.active = !value.active;
        console.log(service+": "+value.active);
      }
      if (value.active) {
          cpmt++;
      }

    });
    console.log("nbr: "+cpmt);
    this.nbrActive = cpmt;
  }
}
