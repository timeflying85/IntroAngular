import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShopListService } from 'src/app/shared/services/shop-list/shop-list.service';
import { item } from '../shopping.component';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {

  constructor(private _ShopListService : ShopListService){}

  get items() : item[]{
    return this._ShopListService.items
  }

  quantities : number[] = []

  removeItem(index : number){

    this._ShopListService.removeItem(index, this.quantities[index])

    this.quantities = []

}




/* Ma Version
  @Input() listShopping: string[] = [];
  @Output() addArticle = new EventEmitter<string>();
  @Output() deleteArticle = new EventEmitter<number>();

  newArticle: string = '';

  addNewArticle() {
    if (this.newArticle !== '') {
      this.addArticle.emit(this.newArticle);
      this.newArticle = '';
    }
  }

  deleteCurrentArticle(index: number) {
    this.deleteArticle.emit(index);
  }
*/

}
