import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CadastrarProdutosComponent } from './components/produtos/cadastrar-produtos/cadastrar-produtos.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
=======
>>>>>>> 76ebb2d20b6f23848f85062bc1557a2720472d9c

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'registrousuario',
    loadChildren: () => import('./registrousuario/registrousuario.module').then( m => m.RegistrousuarioPageModule)
  },
  {
    path: 'registroempresa',
    loadChildren: () => import('./registroempresa/registroempresa.module').then( m => m.RegistroempresaPageModule)
  },
  {
    path: 'esquecisenha',
    loadChildren: () => import('./esquecisenha/esquecisenha.module').then( m => m.EsquecisenhaPageModule)
  },
<<<<<<< HEAD
  {
    path: 'listar-produtos',
    loadChildren: () => import('./listar-produtos/listar-produtos.module').then( m => m.ListarProdutosPageModule)
  },
  {
    path: 'cadastrar-produto',
    loadChildren: () => import('./cadastrar-produto/cadastrar-produto.module').then( m => m.CadastrarProdutoPageModule)
  },
  {
    path: 'atualizar-produto',
    loadChildren: () => import('./atualizar-produto/atualizar-produto.module').then( m => m.AtualizarProdutoPageModule)
  },

=======
>>>>>>> 76ebb2d20b6f23848f85062bc1557a2720472d9c

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
