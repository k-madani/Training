import { Injectable , Injector } from '@angular/core';
import { HttpInterceptor }from'@angular/common/http';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req:any,next:any){
    let userService=this.injector.get(UserService);
    let tokenisedReq=req.clone({
      setHeader:{
        Authorization: `Bearer ${userService.getToken()}`   
      }
    })
    return next.handle(tokenisedReq)
  }
}
