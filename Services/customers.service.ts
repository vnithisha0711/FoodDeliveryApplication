import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customers } from '../_Models/customers.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private _baseUrl:string="http://localhost:9091/api/customers/fetchAllCustomers";
  constructor(private http:HttpClient) {

   }
   getCustomersList():Observable<Customers[]>{
    return this.http.get<Customers[]>(`${this._baseUrl}`);
   }
   addNewCustomers(customersobj:Customers):Observable<any>{
    return this.http.post<any>(`_baseUrl`,customersobj);
   }
}
