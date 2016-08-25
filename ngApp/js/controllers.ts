namespace app.Controllers {
  export class HomeController {
      public brandName;
      public foundItem;
      public image;
      public response;
    constructor(private shoeService:app.Services.ShoeService) {
    }
    public search(){
      let brand = this.brandName;
      let data = brand.toLowerCase();
      this.foundItem = this.shoeService.checkInventory(data);
      if(this.foundItem === undefined){
        this.response = "not in stock";
    } else {
      console.log(this.foundItem);
        let temp = <HTMLImageElement>document.getElementById('image');
        // temp.src = this.foundItem.image;
      }
    }
  }
  angular.module('app').controller('HomeController', HomeController);
}
