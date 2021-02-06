

export default class Services {
  services = [];
  test=0;

  constructor(datas) {
    this.services = datas;
  }


  get countActive(){
    var test = this.services.filterBy('active',true).length;
    console.log("active:"+test);
    return test;
  }


  get sumActive(){
    var total = 0;
    this.services.filterBy('active',true).forEach(function(service) {
      total += service.price;
    });
    console.log("prix:"+total);
    return total;
  }
}
