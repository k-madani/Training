import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UserService]
})
export class SignupComponent implements OnInit {

  registerUserData={
    id:'',
    name: '',
    email: '',
    password: '',
    token:'',
  };

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  showSucessMessage: boolean=false;
  serverErrorMessages: string='';
  
  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  registerUser() {
    this.userService.postUser(this.registerUserData).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        localStorage.setItem('token',res.token);
        this.resetForm();
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form?:NgForm){
    if(form)
      form.reset();
    this.registerUserData={
      id:'',
      name: '',
      email: '',
      password: '',
      token:'',
    };

  }

}
