export default class Contacts {
  datas = [];

  constructor(datas) {
    this.datas = datas
  }

  get deletedsCount() {
    return this.datas.filterBy('isDeleted',true).length;
  }

  get deleteds() {
    return this.datas.filterBy('isDeleted');
  }

  get contacts() {
    return this.datas.filterBy('isDeleted',false);
  }

}
