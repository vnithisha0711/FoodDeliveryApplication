import { HttpClient } from '@angular/common/http';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseURL = "http://localhost:9091/api/payment/fetchAllPayments";
  private addURL= "http://localhost:9091/api/payment/addPayment";
  private deleteURL="http://localhost:9091/api/payment/deletePayment/"

  constructor(private httpClient: HttpClient) { }

  getPaymentsList(): Observable<Payment[]>{
    return this.httpClient.get<Payment[]>(`${this.baseURL}`);
  }

createPayment(payment: Payment): Observable<Object>{
  return this.httpClient.post(`${this.addURL}`, payment);
}
 deletePayment(payment:Payment):Observable<Payment>{
  return this.httpClient.delete<Payment>(this.deleteURL+payment.paymentId);
 }

}
