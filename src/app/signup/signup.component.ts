import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    contact: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{10}$'),
    ]),
  });

  get name() {
    return this.signup.get('name');
  }

  get email() {
    return this.signup.get('email');
  }

  get password() {
    return this.signup.get('password');
  }

  get contact() {
    return this.signup.get('contact');
  }

  display: string = '';
  getVal(val: string) {
    console.log(val);
    this.display = val;
  }
}
