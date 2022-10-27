import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { IonModal, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ValidatorService } from 'angular-iban';
import { AccountService } from '../htpp-services/account.service';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.page.html',
  styleUrls: ['./user-modal.page.scss'],
  providers: [CurrencyPipe]
})
export class UserModalPage implements OnInit {
  isSubmitted = false;
  ionicForm: FormGroup;
  iban: any;
  accountHolder: any;
  public ibanReactive: FormControl;
  message = '';

  @ViewChild(IonModal) modal: IonModal;
  amount: any;
  date: any;
  formattedAmount: any;
  note: any;
  usersList: Object;
  constructor(public formBuilder: FormBuilder, private currencyPipe: CurrencyPipe, public userService: AccountService, private modalCtrl: ModalController) {


  }

  ngOnInit() {

    this.ibanReactive = new FormControl(
      this.iban,
      [
        Validators.required,
        ValidatorService.validateIban
      ]
    );
    this.ionicForm = new FormGroup({
      accountHolder: new FormControl(this.accountHolder, Validators.required),
      iban: this.ibanReactive,
      date: new FormControl(this.date == undefined ? new Date().toISOString() : this.date , Validators.required),
      amount: new FormControl(this.amount, [Validators.required, Validators.minLength(2), Validators.maxLength(8)]),
      note: new FormControl(this.note, Validators.required),
    });
  }
  validateNumber(e: any) {
    let input = String.fromCharCode(e.charCode);
    const reg = /^-?\d*(\.\d{0,2})?$/;

    if (!reg.test(input)) {
      e.preventDefault();
    }
  }

   cancel() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }


  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.modalCtrl.dismiss({
        'dismissed': true,
        userData: this.ionicForm.value
      });


    }
  }

}
