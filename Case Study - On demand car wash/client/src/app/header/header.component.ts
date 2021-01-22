import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public userService:UserService,public adminService:AdminService) { }

  ngOnInit(): void {
    
  }
  
  
}
