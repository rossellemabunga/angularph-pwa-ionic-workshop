import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup = null;
  public isSubmitted = false;
  public errorMessage = null;

  private user = {
    "email": "sample@angular.ph",
    "password": "123123"
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      "email": [null, [
        Validators.required,
        Validators.email
      ]],
      "password": [null, Validators.required]
    });
  }

  login() {
    this.errorMessage = '';

    if (this.loginForm.valid) {

      if (JSON.stringify(this.loginForm.value) !== JSON.stringify(this.user)) {
        this.errorMessage = "Wrong credentials";
        return;
      }

      this.loginForm.reset();
      this.router.navigate(['/home']);
    } else {
      this.isSubmitted = true;
    }
  }

}
