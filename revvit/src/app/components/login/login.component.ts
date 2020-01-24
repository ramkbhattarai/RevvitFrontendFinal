import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user/user';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  constructor(private fb: FormBuilder, private _login: LoginService, private router: Router) { }

  ngOnInit() {
  }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  handleSubmit() {

    this._login.login(this.loginForm.value).subscribe(
      (response: User) => {
        sessionStorage.setItem('currentUser', JSON.stringify(response));
        console.log(`response after login = currentUser in apply mode is ${response}`);
        if (response) {
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = "User name and password doesn't match";
        }
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  handleSignUp(){
    this.router.navigate(['/signup'])
  }
}
