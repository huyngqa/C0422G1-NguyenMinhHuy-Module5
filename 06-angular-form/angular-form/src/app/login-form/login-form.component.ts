import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginReactiveForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  }, [this.checkUser]);
  users: User[] = [{
    email: 'huynguqa@gmail.com',
    password: 'huy123456'
  },
    {
      email: 'huynguyendn321@gmail.com',
      password: 'huy321321'
    }];
  result = '';
  checkSubmit = false;

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

  checkValid(email: string, password: string) {
    for (let user of this.users) {
      if (user.email === email && user.password === password) {
        return true;
      }
    }
    return false;
  }

  async checkUser(loginReactiveForm: AbstractControl) {
    if (await this.checkValid(loginReactiveForm.value.email, loginReactiveForm.value.password)) {
      return null;
    }
    return {userInvalid: true};
  }
}
