import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string
  senha: string

  constructor(
    private navCtrl : NavController,
    private auth: AuthService,
    private toastr: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
  }

  async login()
  {
    if(this.email && this.senha){
      const loading = await this.loadingCtrl.create({
        message: 'Entrando...',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.auth.login(this.email, this.senha)
      .then(()=> {
        loading.dismiss();
      })
      .catch((error)=> {
        loading.dismiss();
        this.toast(error.message, 'danger');
      });
    } else {
      this.toast('Por favor, entre seu email e senha', 'danger');
    }
  }
  async toast(message, status)
  {
    const toast = await this.toastr.create({
      message:message,
      position: 'top',
      color: status,
      duration: 2000
    });
    toast.present();
  }

  mostraformularioinscricao(){
    this.navCtrl.navigateForward('registrousuario')
  }

  // mostrapaginapost(){
  //   this.navCtrl.navigateForward('tabs/home2')
  // }

  mostraformularioempresa(){
    this.navCtrl.navigateForward('registroempresa')
  }

  mostraformularioesquecisenha(){
    this.navCtrl.navigateForward('esquecisenha')
  }


}
