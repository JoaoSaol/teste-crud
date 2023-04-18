import { Component, Input, OnInit } from '@angular/core';
import { DataService, Note, Pessoa } from '../../../providers/data.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() id: string;

  note: Pessoa = null;

  constructor(
    private dataService: DataService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit(): void {
    this.dataService.getPessoaById(this.id).subscribe(res => {
      this.note = res;
    })
  }

  async updateNote() {
    this.dataService.updatePessoa(this.note)
    const toast = await this.toastCtrl.create({
      message: 'Nota Atualizada!',
      duration: 1000
    })
    toast.present()
  }

  async deleteNote () {
    await this.dataService.deletePessoa(this.note);
    const toast = await this.toastCtrl.create({
      message: 'Nota Deletada!',
      duration: 1000
    })
    toast.present()
    this.modalCtrl.dismiss()
  }
}
