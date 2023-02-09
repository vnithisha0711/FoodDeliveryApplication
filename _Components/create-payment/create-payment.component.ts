import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {
 
  payment: Payment = new Payment();
  constructor(private paymentService: PaymentService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePayment(){
    this.paymentService.createPayment(this.payment).subscribe( data=>{
      console.log(data);
      this.goToPaymentList();
    },
    //error => console.log(error)
    );
  }

  goToPaymentList(){

    this.router.navigate(['/payments']);
  }

  onSubmit(){
    console.log(this.payment);
    this.savePayment();
  }
}
