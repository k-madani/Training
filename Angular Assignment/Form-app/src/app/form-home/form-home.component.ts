import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { User } from '../user';

@Component({
  selector: 'app-form-home',
  templateUrl: './form-home.component.html',
  styleUrls: ['./form-home.component.css']
})
export class FormHomeComponent implements OnInit {

  //title = 'advertisementformcomponent';
  categories=['Furniture','Hardware','Mobile'];

  searchText:string = '';

  categoryHasError=true;

  submitted=false;
  errorMsg='';

  userModel=new User('','Mike','','');

  constructor(public service: MainService, private router: Router) { }

  ngOnInit(): void {
  }

  categoryValidate(value:any){
     if(value==='default'){
       this.categoryHasError=true;
     }else{
       this.categoryHasError=false;
     }
  }

  onSubmit(userForm:any){
    this.service.advertisement.push(userForm.value);
  }

  
  onDelete(){
    let len = this.service.advertisement.length;
    this.service.advertisement = this.service.advertisement.splice(len-2, len-1);
  }

  onEdit(){
    this.router.navigate(['/formEdit']);
  }
}

