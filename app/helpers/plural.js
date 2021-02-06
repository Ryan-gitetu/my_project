import { helper } from '@ember/component/helper';

export function plural([count]) {
  console.log("count= "+count);
  if (count == "0") {
    return 'Aucun service selectionné';
  } else if (count == "1") {
    return '1 service selectionné';
  } else if (count > 1) {
    return `${count} services selectionnés`;
  }
}

export default helper(plural);
