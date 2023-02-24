import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  reviews : review[] = []

  // note : number,
  // pseudo : string,
  // commentary : string,
  // recommended : boolean,
  // date : Date

  reviewForm : FormGroup = this._formBuilder.group({
    note : [5, [Validators.required, Validators.min(0), Validators.max(5)]],
    pseudo : ['John Doe', [Validators.required]],
    commentary : [''],
    recommended : [true, [Validators.required]]
  })

  constructor(private _formBuilder : FormBuilder){}

  submit(){

    let values = this.reviewForm.value;

    let newReview : review = {
      note : values.note,
      pseudo : values.pseudo,
      commentary : values.commentary,
      recommended : values.recommended,
      date : new Date()
    }



    this.reviews.push(newReview)

    console.log(this.reviews);


  }
}

export interface review{
  note : number,
  pseudo : string,
  commentary : string,
  recommended : boolean,
  date : Date
}
