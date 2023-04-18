import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage implements OnInit {

  notes = []

  constructor(
    private dataService: DataService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) {
    this.dataService.getPessoa().subscribe(
      res => {
        console.log(res)
        this.notes = res
      }
    )
  }

  ngOnInit() {

  }

  async openNote(note) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: { id: note.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    modal.present();
  }

  async addNote() {
    const alert = await this.alertCtrl.create({
      header: 'Adicionar Nota',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome',
          type: 'text'
        },
        {
          name: 'idade',
          placeholder: 'Informe a Idade',
          type: 'text'
        },
        {
          name: 'dataNascimento',
          placeholder: 'Data Nascimento',
          type: 'text'
        },
        {
          name: 'email',
          placeholder: 'Adicione um email',
          type: 'text'
        },
        {
          name: 'ocupacao',
          placeholder: 'Adicione uma ocupacao',
          type: 'text'
        },
        {
          name: 'telefone',
          placeholder: 'Adicione um telefone',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Adicionar',
          handler: (res) => {
            this.dataService.addPessoa({
              nome: res.nome,
              dataNascimento: res.dataNascimento,
              email: res.email,
              idade: res.idade,
              ocupacao: res.ocupacao,
              telefone: res.telefone
            })
          }
        }
      ]
    });
    await alert.present();
  }
}
