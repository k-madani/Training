import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  advertisement:any = []; 
  
  public getList(){
    return this.advertisement;
  }
}
