import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import {action} from '@ember/object';

export default class Ex1Controller extends Controller {
  @tracked content='';
  @tracked info ="";
  @tracked styles ='alert alert-info';
  @tracked styleInfo ='alert alert-info';
  @tracked texteInfo = 'note modifiée.'
  MAX=100;

  @action
  clear() {
    this.content ='';
  }

  @action
  save() {
    this.styles = 'alert alert-success';
    this.texteInfo = 'note sauvegardée.';
  }

  @action
  update(){
    if (this.content.length >80) {
      this.styles = 'alert alert-danger';
    } else if (this.content.length > 50) {
      this.styles = 'alert alert-warning';
    } else if(this.content.length > 0) {
      this.styles = 'alert alert-info';
    }
  }

  get size() {
    return this.MAX - this.content.length;
  }

  get style() {
    return this.styles;
  }

}
