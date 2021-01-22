import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData={
    email:'',
    password:''
  };
  user_id:any;

  constructor(public userService:UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.userService.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token',res.token);
          this.router.navigate(['/home']);
        },
        err => console.log(err)
      )
  }

  userdetails(){
    let token=this.userService.getToken();
    console.log(this.userService.getId(token));
  }
  

}
