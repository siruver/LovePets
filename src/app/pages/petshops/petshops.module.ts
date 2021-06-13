import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetshopsPageRoutingModule } from './petshops-routing.module';

import { PetshopsPage } from './petshops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetshopsPageRoutingModule
  ],
  declarations: [PetshopsPage]
})
export class PetshopsPageModule {}
