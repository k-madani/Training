import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Edit } from '../edit';
import { MainService } from '../main.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  constructor(private service: MainService, private router: Router) { }

  ngOnInit(): void {
  }

  editModel = new Edit('', '','', '','');
  categories=['Furniture','Hardware','Mobile'];

  onSubmit(value:any){
    console.log(value);
    let id = this.service.advertisement.indexOf(value.oldTitle) + 1;
    
    this.service.advertisement[id].title = value.title;
    this.service.advertisement[id].name = value.name;
    this.service.advertisement[id].title = value.category;
    this.service.advertisement[id].name = value.description;

    this.router.navigate(['']);
  }

}


