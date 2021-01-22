import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGuard } from './auth/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersComponent } from './orders/orders.component';
import { PackagesComponent } from './packages/packages.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { WasherListComponent } from './washer-list/washer-list.component';



const routes: Routes = [
  {
    path:'home' , component:HomePageComponent
  },
  {
    path:'about-us' , component:AboutUsComponent,
  },
  {
    path:'user-register' , component:SignupComponent
  },
  {
    path:'login' , component:LoginComponent
  },
  {
    path:'adminLogin' , component:AdminLoginComponent
  },
  {
    path:'allusers' , component:UserListComponent
  },
  {
    path:'allpackages',component:PackagesComponent
  },
   {
     path:'order' , component:OrdersComponent
    },
  {
    path:'allorders' , component:OrderListComponent
  },
  {
    path:'allwashers' , component:WasherListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
