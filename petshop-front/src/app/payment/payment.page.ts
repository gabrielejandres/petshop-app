import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

    paymentForm: FormGroup;
    cvv: number;
    validity: number;
    cpf: number;
    cpfOrCnpj: number;

    constructor(public formbuilder:FormBuilder) {
      this.paymentForm = this.formbuilder.group({
          address:[null, [Validators.required, Validators.minLength(10)]],
          formOfPayment:[null, [Validators.required]],
          cpf:[null, [Validators.minLength(11)]],
          numberCard: [null, [Validators.required, Validators.minLength(14)]],
          validity: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
          cvv: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
          name: [null, [Validators.required, Validators.minLength(2)]],
          cpfOrCnpj: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      })
    }

    submitForm(form){
        console.log(form);
        console.log(form.value);
    }

    ngOnInit() {
    }

}
