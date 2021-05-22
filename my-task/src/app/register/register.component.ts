import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserstorageService } from '../userstorage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(fb: FormBuilder,private userStorageService: UserstorageService) {
    this.registerForm = fb.group({
      email : [null, Validators.required],
      username: [null, Validators.required],      
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    }) 
   }

  ngOnInit(): void {
  }

  onRegister(value: any) {
    console.log(value);
    this.userStorageService.saveUser(value);
    alert('User Saved!');
  }

}
