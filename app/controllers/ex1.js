import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object';

export default class Ex1Controller extends Controller {
  @tracked content='';
  @tracked info ="";
  @tracked styles ='alert alert-info';
  MAX=100;

  get size() {
    return this.MAX - this.content.length;
  }

  get style() {
    return this.styles;
  }

}
