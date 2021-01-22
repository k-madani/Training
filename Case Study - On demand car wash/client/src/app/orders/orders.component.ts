import { NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../shared/booking.service';
import { PackageService } from '../shared/package.service';
import { UserService } from '../shared/user.service';
import { ICustomWindow, WindowRefService } from '../window-ref.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderDetails={
    userid:'',
    username:'',
    email:'',
    phone:'',
    location:'',
    package_name:'',
    amount:0,
    status:'',
  }
  amount:any;
  packageDetails:any;
  userLoggedIn:any;


  constructor(public orderService:BookingService,
    public packageService:PackageService,
    public userService:UserService,
    private zone:NgZone,private winRef:WindowRefService,
    private router:Router) { 
      this._window=this.winRef.nativeWindow;
    }

  ngOnInit(): void {
    this.assignDetails();
  }

  assignDetails(){
    this.packageDetails=this.packageService.displayOffer();
     this.amount=this.packageDetails.amount*100;
    let token=this.userService.getToken();
    this.userLoggedIn= this.userService.getId(token);
    console.log(this.userLoggedIn);
    console.log(this.packageDetails);
    
  }
  bookOrder(){
    this.orderDetails.userid=this.userLoggedIn.userId;
    this.orderDetails.package_name=this.packageDetails.name;
    this.orderDetails.amount=this.packageDetails.amount;
    this.orderDetails.status="order placed";
    this.orderService.postOrders(this.orderDetails).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }



  private _window:ICustomWindow;
  rzp:any;

  options:any = {
    "key": "rzp_test_VnYxhxZBSkm5gG",
    "amount": 75000,
    "name": "Easy Car Wash",
    "description": "Order Details",
  

    "prefill": {
       "name":"Manny",
       "email":"manny@m",
    },
    "notes": {
      "address": ""},
    "theme": {
      "color": "#3880FF"
    },
    handler:this.paymentHandler.bind(this),
    modal:{
      ondismiss:(()=>{
        this.zone.run(()=>
        {
          //add current page routing if payment fails
        })

      })
    }
  };
  initPay():void{
   //this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();

  } 
  
  paymentHandler(res:any)
  {
    this.zone.run(()=>
    {
      alert('payment Done successfully!');
    })
  }



}
