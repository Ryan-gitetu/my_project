import Controller from '@ember/controller';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { datas } from '../data/datas';


export default class Ex2Controller extends Controller {

@tracked nbrActive = "1";
@tracked total = 300;
@tracked stylesServices = [
  {
    name: datas[0].name,
    style:'alert alert-success'},
  {
    name: datas[1].name,
    style:'alert alert-secondary'},
    {
      name: datas[2].name, 
      style:'alert alert-secondary'},
    {
      name: datas[3].name,
      style:'alert alert-secondary'}
];

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
    console.log("name: "+datas[1].name);
    this.nbrActive = cpmt;
  }

  @action
  isSelect(service){
    var cpmt =0;
    datas.forEach(value => { cpmt++; });

    for (var i = 0; i < cpmt ; i++) {
        if (service.name === datas[i].name) {
          if (datas[i].active === true) {

          }
        }
    }
  }





}
