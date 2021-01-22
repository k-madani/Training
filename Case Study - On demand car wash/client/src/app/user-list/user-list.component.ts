import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[]=[];

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.readUsers();
  }

  addUser(){
    this.router.navigate(['/register']);
  }

  readUsers(){
    this.userService.getUsers()
      .subscribe(
        (data:User[])=>{
          console.log(data);
          this.users=data;
        },
        err=>{
          console.log(err);
        }
      )
  }
 removeUser(id:any,index:any){
  if(window.confirm('Are you sure , you want to delete?')){
    this.userService.deleteUser(id).subscribe(
      (data)=>{
        this.users.splice(index,1);
      }
    )
  }
 }

}
