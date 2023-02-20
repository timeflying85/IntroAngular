import { NotExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.scss']
})
export class FormulairesComponent {

  constructor(private _formBuilder : FormBuilder) {}

  myFormGroup : FormGroup = this._formBuilder.group({
    email : ['',[Validators.email, Validators.required]],
    username : ['', [Validators.required]],
    password : ['', [Validators.required, Validators.minLength(8)]]
  })

  submit() {

    let values = this.myFormGroup.value;

    console.log(values.username)

    console.log(values['username']);

    console.log("j\'ai sususubmit bébé")
  }


}
