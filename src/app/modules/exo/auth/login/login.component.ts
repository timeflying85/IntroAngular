import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  pattern : string = "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"

  response : string = ''

  constructor(private _authService : AuthService, private _formBuilder : FormBuilder){}

  loginForm : FormGroup = this._formBuilder.group({
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.pattern(this.pattern)]]
  })

  login() {

    let values = this.loginForm.value;

    this.response = this._authService.login(values.email, values.password)

  }


}
