import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
    this.presentAlertConfirm();
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Please confirm the Trip ?',
      // message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
          cssClass: 'yes-btn',
          handler: () => {
            console.log('Confirm Okay');
          }
        },

        {
          text: 'No',
          role: 'cancel',
          cssClass: 'no-btn',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }
}
