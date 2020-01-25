import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenPasswordValidator } from '../../shared/password.validator';
import { crossFieldPasswordValidator } from '../../shared/crossFieldPassword.validator';
import { RegistrationService } from '../../services/registration.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private _register: RegistrationService, private router: Router) { }
  registrationForm = this.fb.group({
    fname: ['', [Validators.required, Validators.minLength(3)]],
    lname: ['', Validators.required],
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(4), forbiddenPasswordValidator(/pass/)]],
    confirmPassword: ['', Validators.required]
  }, { validator: crossFieldPasswordValidator });

  ngOnInit() {
  }


  handleSubmit() {
    
    let formData = { ...this.registrationForm.value};
    delete formData.confirmPassword;
   
    this._register.register(formData).subscribe(
      (response: User) => {
        sessionStorage.setItem('currentUser', JSON.stringify(response));
       
        this.router.navigate(['/home']);
      },
     // error => console.log("Error", error)
    );
  }

}
