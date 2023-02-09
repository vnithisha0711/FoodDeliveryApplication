import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  carts: Cart[] = [];
  
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCarts();
    
  }
  getCarts(){
    this.cartService.getCartList().subscribe(data=>{
      this.carts=data;
    })
  }

  updateCart(cart:Cart){
    this.cartService.updateCart(cart).subscribe ({
      next:(res:any)=>{
        console.log(res);
        this.getCarts();
      }
    })


  }
  deleteCart(cart:Cart){
    this.cartService.deleteCart(cart).subscribe({
      next:(res:any)=>{
        console.log(res);alert('Payment deleted successfully');
        this.getCarts();
      }
    })

  }
  cartDetails(){

  }
  }
  
  

