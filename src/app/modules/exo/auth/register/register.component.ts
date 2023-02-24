import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  response : string = ''

  pattern : string = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"

  registerForm : FormGroup = this._formBuilder.group({
    email : ['', [Validators.required, Validators.email]],
    pseudo : ['', [Validators.required]],
    password : ['', [Validators.required, Validators.pattern(this.pattern)]],
    confirmationPassword : ['', [Validators.required, Validators.pattern(this.pattern)]],
    cluf : [false, [Validators.requiredTrue]]
  })

  constructor(private _authService : AuthService, private _formBuilder : FormBuilder){}


  // comparePassword() : ValidatorFn {
  //   return (control : AbstractControl) : ValidationErrors | null => {
  //     let pw = control.get('password')

  //     if(control.get('password') != undefined && control.get('confirmationPassword') != null){
  //       return true ? null : {samePassword : false}
  //     }

  //     return true ? null : {samePassword : false}

  //   }
  // }

  register(){

    let values = this.registerForm.value;

    this.response = this._authService.register(values.pseudo, values.email, values.password)

  }


}
