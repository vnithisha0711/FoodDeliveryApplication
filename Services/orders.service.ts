import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
 
  //constructor() { }
  private baseURL = "http://localhost:9091/api/Orders";
  constructor(private httpClient: HttpClient) { }

  getOrdersList(): Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.baseURL}`);
  }
  createOrders(order: Order) : Observable<Object> {
    alert("Create"+order);
    return this.httpClient.post(`${this.baseURL}`, order);
  }
  deleteOrders(orderId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${orderId}`);
  }
}

