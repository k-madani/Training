import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../shared/booking.service';
import { Washer } from '../shared/washer.model';
import { WasherService } from '../shared/washer.service';

@Component({
  selector: 'app-washer-list',
  templateUrl: './washer-list.component.html',
  styleUrls: ['./washer-list.component.css']
})
export class WasherListComponent implements OnInit {

  washers:Washer[]=[];
  order:any;

  constructor(private washerService:WasherService,private router:Router,private bookingService:BookingService) { }

  ngOnInit(): void {
    this.readWashers();
  }

  addWasher(washer:any){
    this.bookingService.selectedOrder.washername=washer.name;
    this.bookingService.selectedOrder.washerid=washer._id;
    this.bookingService.selectedOrder.washerphone=washer.phone;
    this.bookingService.selectedOrder.status='Confirmed';
    this.bookingService.washer=true;
    console.log(this.bookingService.selectedOrder);
    this.bookingService.updateOrder(this.bookingService.selectedOrder._id,this.bookingService.selectedOrder);
    
  }


  readWashers(){
    this.washerService.getWashers()
      .subscribe(
        (data:Washer[])=>{
          console.log(data);
          this.washers=data;
        },
        err=>{
          console.log(err);
        }
      )
  }
 removeWasher(id:any,index:any){
  if(window.confirm('Are you sure , you want to delete?')){
    this.washerService.deleteWasher(id).subscribe(
      (data)=>{
        this.washers.splice(index,1);
      }
    )
  }
 }
}
