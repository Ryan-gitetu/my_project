

export default class Services {
  services = [];
  test=0;

  constructor(datas) {
    this.services = datas;
  }


  get countActive(){
    test = this.services.filterBy('active',true).length;
    return test;
  }


  get sumActive(){
    var total = 0;
    this.services.filterBy('active',true).forEach(function(service) {
      total += service.price;
    });
    return total;
  }
}
