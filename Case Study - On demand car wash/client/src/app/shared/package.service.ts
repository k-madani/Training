import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {  Package }from './package.model';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  selectedPackage: any;

  packageUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/allpackages"
  postUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/packages"
  updateUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/updatepackage/"
  deleteUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/deletepackage/"

  headers=new HttpHeaders().set('Content-type','application/json');

  constructor(private http:HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  postPackage(booking_package:Package){
    return this.http.post(this.postUrl,booking_package,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }
  getPackages(){
    return this.http.get(this.packageUrl,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }
  getPackagesById(id:any){
    return this.http.get(this.packageUrl+id,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }

  //when user selects a package
  getOffer(offer:any){
    this.selectedPackage=offer;
  }
  //to enter into orders form
  displayOffer(){
    return this.selectedPackage;
  }
}
