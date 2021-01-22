import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../shared/booking.service';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders:Order[]=[];

  constructor(private bookingService:BookingService,private router:Router) { }

  ngOnInit(): void {
    this.readOrders();
  }

  readOrders(){
    this.bookingService.getOrders().subscribe(
      (data:Order[])=>{
        console.log(data);
        this.orders=data;
      },
      err=>{
        console.log(err);
      }
    )
  }

  removeOrder(id:any,index:any){
    if(window.confirm('Are you sure , you want to delete?')){
      this.bookingService.deleteOrdersById(id).subscribe(
        (data)=>{
          this.orders.splice(index,1);
        }
      )
    }
   }

   assignWasher(order:any){
     this.bookingService.getOrder(order);
     this.router.navigate(['/allwashers']);
     console.log(this.bookingService.displayOrder());
   }

}
