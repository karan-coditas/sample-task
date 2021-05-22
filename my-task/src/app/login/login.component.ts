import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    }) 
   }

  ngOnInit(): void {
  }

  onLogin(value: any) {
    console.log(value);
  }

}
