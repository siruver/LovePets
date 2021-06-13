import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'home2',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/home2/home2.module'). then(m => m.Home2PageModule)
          }
        ]
      },
      {
        path:'petshops',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/petshops/petshops.module'). then(m => m.PetshopsPageModule)
          }
        ]
      },
      {
        path:'login',
        children:[
          {
            path:'',
            loadChildren: () => import('../pages/login/login.module'). then(m => m.LoginPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo: '/tabs/home2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: '/tabs/home2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
