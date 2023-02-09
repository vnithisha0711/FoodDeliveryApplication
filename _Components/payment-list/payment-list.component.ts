import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  payments: Payment[] = [];
  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.getPayments();
  }
   getPayments(){
    this.paymentService.getPaymentsList().subscribe(data => {
      this.payments=data;
    })
  }

  deletePayment(payment:Payment){
    this.paymentService.deletePayment(payment).subscribe({
      next:(res:any)=>{
        console.log(res);alert('Payment deleted successfully');
        this.getPayments();
      }
    })
  }

}
