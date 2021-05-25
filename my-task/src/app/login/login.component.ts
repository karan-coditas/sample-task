import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserstorageService } from '../userstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(fb: FormBuilder,  private userStorageService: UserstorageService, private router: Router) {
    this.loginForm = fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    }) 
   }

  ngOnInit(): void {
    console.log('ON INIT LOGIN')
  }

  onLogin(value: any) {
    console.log(value);
    const result  = this.userStorageService.verifyUser(value);
    if(result) {
      alert('Login Success!');
      this.router.navigateByUrl('/home');
    }else {
      alert('Login Failed!');
    }
    
  }

}
