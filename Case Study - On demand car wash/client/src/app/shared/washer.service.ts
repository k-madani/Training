import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class WasherService {

  loginUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/washerLogin";
  getUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/allwashers";
  deleteUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/deletewashers/";
  registerUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/washer-register/"


  headers=new HttpHeaders().set('Content-type','application/json');
  
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

  constructor(private http: HttpClient,private _router:Router) { }

  //register
  postWasher(user:User){
    return this.http.post<any>(this.registerUrl,user,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }

  //read all users
  getWashers(){
    return this.http.get<any>(this.getUrl,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }
  
  //for viewing a particular user details
  getWasherById(id:string){
    return this.http.get<any>("http://localhost:3000/api/users/"+id,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }

  //delete user
  deleteWasher(id:string){
    return this.http.delete(this.deleteUrl+id,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }

  loginWasher(user:any){
    return this.http.post<any>(this.loginUrl,user,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getId(token:any){
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded

  }

}
