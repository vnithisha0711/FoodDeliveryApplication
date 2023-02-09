import { OrdersService } from './../orders.service';
import { Order } from './../order';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-lists',
  templateUrl: './order-lists.component.html',
  styleUrls: ['./order-lists.component.css']
})
export class OrderListsComponent implements OnInit {

  orders?: Order[];
  constructor(private OrdersService: OrdersService,
    private router: Router) { }

  ngOnInit(): void {
    this.getorders();
  }
  private getorders() {
    this.OrdersService.getOrdersList().subscribe(data => {
      this.orders = data;
    });
  }
  

updateorders(){

  this.router.navigate(['update-orders',]);

}
deleteorders(orderId:any){
  this.OrdersService.deleteOrders(orderId).subscribe( data => {
   console.log(data); 
   this.getorders();
  }
   )}
}
