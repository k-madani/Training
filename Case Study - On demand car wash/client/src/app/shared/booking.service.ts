import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  selectedOrder:any;
  washer=false;

  bookingurl='https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/allorders';
  postUrl='https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/order';
  updateUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/updateorder/"
  deleteUrl="https://0pwxhz0wtk.execute-api.us-east-1.amazonaws.com/production/api/deleteorder/"

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

  constructor(private http: HttpClient) { }

  getOrders(){
    return this.http.get<any>(this.bookingurl).pipe(retry(3), catchError(this.handleError));
  }

  postOrders(order:any){
    return this.http.post<any>(this.postUrl,order,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }

  getOrdersById(id:any){
    return this.http.get<any>(this.postUrl+id,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }
  
  deleteOrdersById(id:any){
    return this.http.delete<any>(this.deleteUrl+id,{headers:this.headers}).pipe(retry(3), catchError(this.handleError));
  }

  updateOrder(id:any,data:any){
    console.log(data);
    return this.http.patch<any>(this.updateUrl+id,data).pipe(retry(3), catchError(this.handleError));
  }
  getOrder(order:any){
    this.selectedOrder=order;
  }
  displayOrder(){
    return this.selectedOrder;
  }
  

}
