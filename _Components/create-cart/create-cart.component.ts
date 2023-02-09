import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { Router } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.component.html',
  styleUrls: ['./create-cart.component.css']
})
export class CreateCartComponent implements OnInit {

  cart: Cart = new Cart();
  constructor(private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void {

  }

  saveCart(){
    this.cartService.createCart(this.cart).subscribe( data=>{
      console.log(data);
      this.goToCartList();

    },

    //error => console.log(error)

    );

  }
  goToCartList(){
    this.router.navigate([`/cart`]);

  }

  onSubmit(){
    console.log(this.cart);
    this.saveCart();

  }

}

