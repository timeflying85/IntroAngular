import { Component } from '@angular/core';
import { ShopListService } from 'src/app/shared/services/shop-list/shop-list.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {

  name : string = ''

  quantity : number = 0

  constructor(private _shopListService : ShopListService){}

  addItem() {

    this._shopListService.addItem(this.name, this.quantity)

  }

  removeItem(index : number, quantity : number){

    this._shopListService.removeItem(index, quantity)

  }



/* Ma Version
  listShopping: string[] = [];


  addArticle(article:string) {
    this.listShopping.push(article)
  }

  deleteArticle(index:number) {
    this.listShopping.splice(index, 1)
  }
*/

}

export interface item{
  name : string,
  quantity : number
}
