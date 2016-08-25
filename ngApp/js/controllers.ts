namespace app.Controllers {
  export class HomeController {
      public brandName;
    constructor(private shoeService:app.Services.ShoeService) {
    }
    public search(){
      let brand = this.brandName;
      let data = brand.toLowerCase();
      this.shoeService.checkInventory(data);
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
