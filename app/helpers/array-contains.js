import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params/*, hash*/) {
  const [items, value,prop] = params; //recuperation des paramètres de params
  let id=prop ||'id' //concatene prop avec 'id' dans la var id
  return items.filterBy(id,value).length > 0; // retourne vrai si le tableau contient des éléments
});
