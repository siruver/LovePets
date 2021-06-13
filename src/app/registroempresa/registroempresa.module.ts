import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroempresaPageRoutingModule } from './registroempresa-routing.module';

import { RegistroempresaPage } from './registroempresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroempresaPageRoutingModule
  ],
  declarations: [RegistroempresaPage]
})
export class RegistroempresaPageModule {}
