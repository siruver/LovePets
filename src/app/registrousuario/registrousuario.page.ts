import { User } from './../models/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';


@Component({
selector: 'app-registrousuario',
templateUrl: './registrousuario.page.html',
styleUrls: ['./registrousuario.page.scss'],
})
export class RegistrousuarioPage implements OnInit
{
email: string;
senha:string;
nome:string;
confirmar:string;
senhaCerta: boolean;
constructor(
  private afs: AngularFirestore,
  private afauth: AngularFireAuth,
  private navCtrl: NavController,
  private LoadingCtrl: LoadingController,
  private toastr: ToastController,
  private router: Router
) { }

ngOnInit() {
}

async register()
{
  if(this.nome && this.email && this.senha)
  {
    const loading = await this.LoadingCtrl.create({
      message:'Carregando, por favor espere',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();

    this.afauth.createUserWithEmailAndPassword(this.email, this.senha).then((data)=> {

      this.afs.collection('users').doc(data.user.uid).set({
        'userId': data.user.uid,
        'name': this.nome,
        'email': this.email,
        'createdAt': Date.now()
      })

      data.user.sendEmailVerification();

    })
    .then(()=> {
      loading.dismiss();
      this.toast("Registro concluído!",'success');
      this.router.navigate(['/tabs/home2'])
    })
    .catch((error)=> {
      loading.dismiss();
      this.toast(error.message, 'danger');
    })
  }else {
    console.log('Por favor, preencha o formulário','danger');
  }

}

checkPassword(){
  if(this.senha == this.confirmar){
    this.senhaCerta = true;
  } else {
    this.senhaCerta =false;
  }
}

async toast(message,status){
  const toast =await this.toastr.create({
    message: message,
    position: 'top',
    color: status,
    duration: 2000
  });

  toast.present();
}
voltapaginalogin(){
  this.navCtrl.navigateBack('tabs/login')
}

}
