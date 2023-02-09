import { OrdersService } from './../orders.service';
import { Order } from './../order';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent implements OnInit {
 
  order: Order = new Order();
  constructor(private ordersService: OrdersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveOrder(){
    this.ordersService.createOrders(this.order).subscribe(data =>{
      console.log(data);
      this.goToOrderLists();
    },
    error => console.log(error));
  }
   
  goToOrderLists(){
    this.router.navigate(['/orders']);

  }
  onSubmit() {
    // alert("submit");
    console.log(this.order
      +'hello');
    this.saveOrder();
  }
  
}
