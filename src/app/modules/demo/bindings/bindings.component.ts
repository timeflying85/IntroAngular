import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent {

  maVariable = "Hello les guys!";

  maFonction() {
    this.maVariable = "Pourquoi tu clics ?"
  }

  isOpen : boolean = true

  invertOpen() {
    this.isOpen = !this.isOpen
  }

}
