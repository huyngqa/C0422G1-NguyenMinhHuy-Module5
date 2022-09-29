import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerReactiveForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
    passwords: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, [this.matchPassword]),
    address: new FormControl(),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
  });

  result = '';
  checkSubmit = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  matchPassword(passwords: AbstractControl) {
    return (passwords.value.password === passwords.value.confirmPassword) ? null : {isMatching: true};
  }

  submitForm() {
    this.checkSubmit = true;
    console.log(this.registerReactiveForm);
    if (this.registerReactiveForm.status !== 'INVALID') {
      this.result = 'success';
    }
  }
}
