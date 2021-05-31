import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-esquecisenha',
  templateUrl: './esquecisenha.page.html',
  styleUrls: ['./esquecisenha.page.scss'],
})
export class EsquecisenhaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  voltapaginalogin(){
    this.navCtrl.navigateBack('tabs/login')
  }


}
