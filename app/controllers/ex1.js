import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object';

export default class Ex1Controller extends Controller {
  @tracked content='';
  @tracked info ="";
  @tracked styles ='alert alert-info';
  MAX=100;

  @action
  clear() {
    this.content ='';
  }

  @action
  save() {

  }

  @action
  update(){
    if (this.content >0) {
      this.styles = 'alert alert-info';
    } else if (this.content > 50) {
      this.styles = 'alert alert-warning';
    } else if(this.content > 80) {
      this.styles = 'alert alert-danger';
    }
  }

  get size() {
    return this.MAX - this.content.length;
  }

  get style() {
    return this.styles;
  }

}
