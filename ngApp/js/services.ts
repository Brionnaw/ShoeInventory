namespace app.Services {
  export class ShoeService{
    public shoeBrand;
    constructor (){
      this.shoeBrand = [
        {brand: "adidas", line: "classics", image: "http://images.footlocker.com/pi/77124/zoom/adidas-originals-superstar-mens"},
        {brand: "nike", line : "airmax", image:"https://www.google.com/search?q=nike+air+max&rlz=1C5CHFA_enUS692US692&biw=1280&bih=699&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi1nun-id3OAhVI6WMKHWzLC5oQ_AUICSgC#imgrc=3MjgDgJwHBMjpM%3A"},
        {brand: "vans", line: "old Skool" , image:"http://www.vans.com/shop/old-skool-lite--black-white?cm_mmc=GPF-_-google-_-merchantcenter-_-Z5WIJU&rmatt=tsid:1013075|cid:191532173|agid:26624222573|tid:pla-120010846839|crid:95842386413|nw:g|rnd:7454904875280802316|dvc:c|adp:1o1&gclid=CjwKEAjwrvq9BRD5gLyrufTqg0YSJACcuF81FDg-3Av2NAwbMiy5GSu2mPh4xQdvURV06RqxXTBodRoC7n_w_wcB"}
      ]
    };
      public checkInventory(brandName:string){
        for(let value of this.shoeBrand) {
          if (value.brand === brandName){
            alert('in stock');
          }  else {
            alert('not in stock');
          }
        }
      }
  }
  angular.module('app').service('shoeService', ShoeService);

}
