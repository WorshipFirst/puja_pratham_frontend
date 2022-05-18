import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
  sentOtp(formdata:FormData):Observable<any>{
    let api = "http://localhost:3000/user/add";
    return this.http.post(api,formdata);
  }
  register(otp:string,id:string):Observable<any>{
    let api = "http://localhost:3000/user/register-by-otp";
    return this.http.post(api,{otp,id});
  }

  login(email:string,password:string):Observable<any>{
    let api = "http://localhost:3000/user/login";
    return this.http.post(api,{email,password});
  }

  resendOtp(id:string):Observable<any>{
    let api = "http://localhost:3000/user/resend-otp/"+id;
    return this.http.get(api);
  }
  // forgetPassword(){
  //   let api = "http://localhost:3000/user/"
  // }
  
  public addToCart(productId:string):Observable<any>{
    let api = "http://localhost:3000/cart/add-to-cart";
    let userId = JSON.parse(sessionStorage.getItem("user")|| "{}").id;
    return this.http.post(api,{userId:userId,productId:productId});
  }
  public viewCart():Observable<any>{
    let userId = JSON.parse(sessionStorage.getItem("user")|| "{}").id;
    let api = "http://localhost:3000/cart/view-one/"+userId;
    return this.http.get(api);
  }
  public removeFromCart(productId:any):Observable<any>{
    let userId = JSON.parse(sessionStorage.getItem("user")|| "{}").id;
    let api = "http://localhost:3000/cart/delete-product/"+userId+"/"+productId;
    return this.http.delete(api);
  }

  public placeOrder(order:any):Observable<any>{
    let userId = JSON.parse(sessionStorage.getItem("user")|| "{}").id;
    order.userId = userId;
    let api = "http://localhost:3000/order/place-order-by-cash";
    return this.http.post(api,order);
  }

  public deletecart():Observable<any>{
    let userId = JSON.parse(sessionStorage.getItem("user")|| "{}").id;
    let api = "http://localhost:3000/cart/delete-cart/" + userId;
    return this.http.delete(api);
  }

  public createOrder():Observable<any>{
    let api = "http://localhost:3000/order/create";
    return this.http.get(api);
  }
  public placeOrder2(order:any):Observable<any>{
    let api = "http://localhost:3000/order/order-status";
    return this.http.post(api,order);
  }
}
