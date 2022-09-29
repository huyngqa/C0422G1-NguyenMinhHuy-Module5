import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginReactiveForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  result = '';
  checkSubmit: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginReactiveForm);
    this.checkSubmit = true;
    if (this.loginReactiveForm.status === 'VALID') {
      this.result = 'Login thành công';
    }
  }
}
