import { Component, NgZone, OnInit } from '@angular/core';
import { PackageService } from '../shared/package.service';
import { Package }from '../shared/package.model';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { BookingService } from '../shared/booking.service';
import { ICustomWindow, WindowRefService } from '../window-ref.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  offers:Package[]=[];
  user_loggedin:any;

  orderDetails={
    _id:'',
    userid:'',
    name:'',
    email:'',
    phone:'',
    location:'',
    package_name:'',
    amount:'',
    status:''
    
  };

  
  
  constructor(
    private packageService:PackageService,
    public bookingService:BookingService,
    private router:Router,
    public userService:UserService) { }
   
  ngOnInit(): void {
    this.displayPackages();
  }
  //read all packages 
  displayPackages(){
    this.packageService.getPackages().subscribe(
      (data:any)=>{
        console.log(data);
        this.offers=data;
      },
      err=>{
        console.log(err);
      }
    )
  }

  selectPackage(offer:any){
    this.packageService.getOffer(offer);
    this.router.navigate(['/order']);
    console.log(this.packageService.displayOffer());
    
  }

  
}
