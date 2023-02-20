import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {

  valeurParent : string = 'Ecrit dans le parent'

  messageEnfant : string = 'Aucun'

  affectValeur(valeur : string){
    this.messageEnfant = valeur;
  }

}
