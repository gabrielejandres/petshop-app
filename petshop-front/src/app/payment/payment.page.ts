import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

    paymentForm: FormGroup;

    constructor(public formbuilder:FormBuilder) {
      this.paymentForm = this.formbuilder.group({
          address:[null, [Validators.required, Validators.minLength(10)]],
          formOfPayment:[null, [Validators.required]],
          cpf:[null, [Validators.required, Validators.minLength(11)]],
      })
    }

    submitForm(form){
        console.log(form);
        console.log(form.value);
    }

    ngOnInit() {
    }

}
