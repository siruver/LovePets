import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service';
import {AuthGuard} from './guard/auth.guard';

<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http';

=======
>>>>>>> 76ebb2d20b6f23848f85062bc1557a2720472d9c
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
<<<<<<< HEAD
    AngularFirestoreModule,
    HttpClientModule
=======
    AngularFirestoreModule
>>>>>>> 76ebb2d20b6f23848f85062bc1557a2720472d9c
  ],
  providers: [
    AuthService,
    AuthGuard,
    // SplashScreen,
    {provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
