import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-petshops',
  templateUrl: './petshops.page.html',
  styleUrls: ['./petshops.page.scss'],
})
export class PetshopsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  golistarprodutos(){
    this.navCtrl.navigateForward('listar-produtos')
  }

}
