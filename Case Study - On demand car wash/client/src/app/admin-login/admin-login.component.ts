import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminData={
    email:'',
    password:''
  };
  admin_id:any;

  constructor(private router: Router,public adminService:AdminService) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    this.adminService.loginAdmin(this.adminData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token',res.token);
        this.router.navigate(['/home']);
      },
      err => console.log(err)
    )
  }

}
