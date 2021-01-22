import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import jwtDecode, { JwtPayload } from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  registerUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/user-register";
  loginUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/user-login";
  getUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/allusers";
  deleteUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/deleteusers/";


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
  postUser(user:User){
    return this.http.post<any>(this.registerUrl,user,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }

  //read all users
  getUsers(){
    return this.http.get<any>(this.getUrl,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }
  
  //for viewing a particular user details
  getUsersById(id:string){
    return this.http.get<any>("http://localhost:3000/api/users/"+id,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }

  //delete user
  deleteUser(id:string){
    return this.http.delete(this.deleteUrl+id,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }

  loginUser(user:any){
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