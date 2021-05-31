import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registroempresa',
  templateUrl: './registroempresa.page.html',
  styleUrls: ['./registroempresa.page.scss'],
})
export class RegistroempresaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  voltapaginalogin(){
    this.navCtrl.navigateBack('tabs/login')
  }


}
