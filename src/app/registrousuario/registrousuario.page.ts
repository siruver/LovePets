import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.page.html',
  styleUrls: ['./registrousuario.page.scss'],
})
export class RegistrousuarioPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  
  voltapaginalogin(){
    this.navCtrl.navigateBack('tabs/login');
  }
}
