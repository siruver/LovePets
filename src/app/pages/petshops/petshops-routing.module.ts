import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetshopsPage } from './petshops.page';

const routes: Routes = [
  {
    path: '',
    component: PetshopsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetshopsPageRoutingModule {}
