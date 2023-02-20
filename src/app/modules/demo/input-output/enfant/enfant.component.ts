import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})

export class EnfantComponent {

  @Input()
  valeurEnfant : string = "valeur par défaut de l'enfant"

  @Output()
  monEvent : EventEmitter<string> = new EventEmitter<string>()


  emmettreBonjour() {
    this.monEvent.emit('Bonjour')
  }

  emmettreAuRevoir(){
    this.monEvent.emit('Au Revoir')
  }

}
