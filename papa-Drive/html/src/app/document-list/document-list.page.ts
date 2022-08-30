import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.page.html',
  styleUrls: ['./document-list.page.scss'],
})
export class DocumentListPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) {}

  ngOnInit() { }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
       header: '',
      cssClass: 'listing-icons',
      buttons: [{
        text: 'View Enlarge',
        role: 'destructive',
        icon: 'search',
        handler: () => {
          console.log('Click on View Enlarge');
        }
      },
      {
        text: 'Share via Email',
        icon: 'mail',
        handler: () => {
          console.log('Click on Share via Email');
        }
      }, {
        text: 'Rename',
        icon: 'pencil',
        handler: () => {
          console.log('Click on Rename');
        }
      }, {
        text: 'Delete',
        icon: 'trash',
        handler: () => {
          console.log('Click on Delete');
        }  
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
