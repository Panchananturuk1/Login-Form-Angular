import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  // USING FORM GROUP

  // login =  new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //   ]),
  // });

  //   get email() {
  //     return this.login.get('email');
  //   }

  //   get password() {
  //     return this.login.get('password');
  //   }


  //USING FORM BUILDER

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  login(): void {}


  display: string = '';
    getVal(val: string) {
      console.log(val);
      this.display = val;
      alert('Login Sucess');
    }


}
