import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserService } from './shared/user.service';
import { BookingService } from './shared/booking.service';
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptorService } from './auth/token-interceptor.service';
import { PackagesComponent } from './packages/packages.component';
import { UserListComponent } from './user-list/user-list.component';

import { OrdersComponent } from './orders/orders.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { OrderListComponent } from './order-list/order-list.component';
import { WasherListComponent } from './washer-list/washer-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    PackagesComponent,
    UserListComponent,
    OrdersComponent,
    AdminLoginComponent,
    OrderListComponent,
    WasherListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [UserService,BookingService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
