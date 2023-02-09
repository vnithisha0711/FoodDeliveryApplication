import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../cart';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  private baseURL = "http://localhost:9091/api/cart";
  private updateURL = "http://localhost:9091/api/updateCart";
  private deleteURL = "http://localhost:9091/api/deleteCartById/";
  constructor(private httpClient: HttpClient) { }

  getCartList(): Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(`${this.baseURL}`);
  }

  createCart(cart: Cart): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, Cart);
  
  }

  deleteCart(cart:Cart):Observable<Cart>{
    return this.httpClient.delete<Cart>(this.deleteURL+cart.cartId);
  }

  updateCart(cart:Cart):Observable<Cart>{
    return this.httpClient.put<Cart>(this.updateURL,cart);
  }

}
  
