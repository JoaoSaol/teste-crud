import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
})
export class SupportPage {
  submitted = false;
  supportMessage: string;

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) { }

  async ionViewDidEnter() {
    const toast = await this.toastCtrl.create({
      message: 'This does not actually send a support request.',
      duration: 3000
    });
    await toast.present();
  }

  async submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportMessage = '';
      this.submitted = false;

      const toast = await this.toastCtrl.create({
        message: 'Sua mensagem foi enviada com sucesso e em breve entraremos em contato pelo email cadastrado',
        duration: 3000
      });
      await toast.present();
    }
  }

  // If the user enters text in the support question and then navigates
  // without submitting first, ask if they meant to leave the page
  async ionViewCanLeave(): Promise<boolean> {
    // If the support message is empty we should just navigate
    if (!this.supportMessage || this.supportMessage.trim().length === 0) {
      return true;
    }

    return new Promise(async (resolve: any, reject: any) => {
      const alert = await this.alertCtrl.create({
        // title: 'Leave this page?',
        message: 'Você tem certeza que quer sair sem enviar a mensagem?',
        buttons: [
          { text: 'Ficar', handler: reject },
          { text: 'Sair', role: 'cancel', handler: resolve }
        ]
      });

      await alert.present();
    });
  }
}
