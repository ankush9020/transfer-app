import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { AlertController, IonModal, ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ValidatorService } from 'angular-iban';
import { UserModalPage } from '../user-modal/user-modal.page';
import { AccountService } from '../htpp-services/account.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isDesc: boolean = false;
  column: string = 'CategoryName';
  usersList: any;
  isSubmitted = false;
  public ibanReactive: FormControl;
  @ViewChild(IonModal) modal: IonModal;
  constructor(private modalCtrl: ModalController, public toastController: ToastController, public userService: AccountService, private alertCtrl: AlertController) {

  }
  ngOnInit() {
    this.getAllAccountHolder();
  }

  public getAllAccountHolder() {
    this.userService.getAccountHolderData().subscribe(
      result => {
        this.usersList = result;
      },
      err => console.log(err)
    )
  }

  async openModal() {
    // console.log("clicked")
    const modal = await this.modalCtrl.create({
      component: UserModalPage,

    });

    modal.onDidDismiss()
      .then((data) => {
        if (data.data.userData) {
          this.userService.saveAccountHolder(data.data.userData)
            .subscribe(async (res) => {
              this.getAllAccountHolder();

              const toast = await this.toastController.create({
                message: 'New account holder created successfully',
                duration: 2000
              });
              toast.present();

            });
        }
      });

    return await modal.present();
  }


  async closeModal() {
    const modal = await this.modalCtrl.dismiss({
      component: UserModalPage,
    });
  }


  async editUser(rowData: any) {
    const modal = await this.modalCtrl.create({
      component: UserModalPage,
      componentProps: rowData
    });

    modal.onDidDismiss()
      .then((data) => {
        debugger
        if (data.data.userData) {
          this.userService.updateAccountHolder(rowData)
            .subscribe(async (res) => {
              this.getAllAccountHolder();

              const toast = await this.toastController.create({
                message: 'Account holder details updated successfully',
                duration: 2000
              });
              toast.present();

            });
        }
      });

    return await modal.present();
  }

  async deleteUser(userData: any) {
    let alert = await this.alertCtrl.create({
      //title: 'Confirm Items',
      message: 'Do you want to delete this account holder?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'icon-color',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          cssClass: 'icon-color',
          handler: async data => {
            //Call you API to remove Items here.
            this.userService.deleteAccountHolder(userData.id)
              .subscribe((res) => {
                this.getAllAccountHolder();
              });
              const toast = await this.toastController.create({
                message: 'Account holder deleted successfully',
                duration: 2000
              });
              toast.present();

          }
        }
      ]
    });
    alert.present();
  }

  sort(property) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.usersList.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  };


}


