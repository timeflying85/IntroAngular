import { Injectable } from '@angular/core';
import { item } from 'src/app/modules/exo/shopping/shopping.component';

@Injectable({
  providedIn: 'root'
})
export class ShopListService {

  items : item[] = [];

  constructor() { }

  addItem(name : string, quantity : number){

    let searchedItem = this.items.find(i => i.name === name)

    if(searchedItem) {
      searchedItem.quantity += quantity;
    }

    else{

    let newItem : item = {
      name : name,
      quantity : quantity
    }
    this.items.push(newItem)
  }

}


  removeItem(index : number, quantity : number){

    this.items[index].quantity -= quantity

    if(this.items[index].quantity == 0) {
      this.items.splice(index, 1)
    }


  }

}
