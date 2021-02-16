import Component from '@glimmer/component';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = [];//tableau contenant tout les elements
  selected = [];//contenant les elements selectionne
  id = 'id';

  constructor() {
    super(...arguments);
    this.elements = this.args.elements;
    this.selected = this.args.selected;
    this.id = this.args.identifier || 'id';
  }

  @action
  change(event) {
    let select = event.target;//recupere l'element selectionné
    var selectedIds = [...select.selectedOptions].map(option => option.value);//recupere l'id de l'element selectionné
    if (this.args.onChange) {
      this.args.onChange(this.elements.filter(elm => selectedIds.filter(e => e == elm[this.id]).length > 0));
    }
  }
}
