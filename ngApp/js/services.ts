namespace app.Services {
  export class ShoeService{
    public shoeBrand;
    constructor (){
      this.shoeBrand = [
        {brand: "adidas", line: "classics", image: "ngApp/images/adidas.jpeg"},
        {brand: "nike", line : "airmax", image:""},
        {brand: "vans", line: "old Skool" , image:"http://www.vans.com/shop/old-skool-lite--black-white?cm_mmc=GPF-_-google-_-merchantcenter-_-Z5WIJU&rmatt=tsid:1013075|cid:191532173|agid:26624222573|tid:pla-120010846839|crid:95842386413|nw:g|rnd:7454904875280802316|dvc:c|adp:1o1&gclid=CjwKEAjwrvq9BRD5gLyrufTqg0YSJACcuF81FDg-3Av2NAwbMiy5GSu2mPh4xQdvURV06RqxXTBodRoC7n_w_wcB"}
      ]
    };
    public checkInventory(brandName:string) {
      let arr = this.shoeBrand;
      let item;
      for(let i = 0; i < arr.length; i++) {
        item = arr[i];
        if(item.brand === brandName){
          return item;
        } else {
          continue;
        }
      }
    }
  }
  angular.module('app').service('shoeService', ShoeService);

}
