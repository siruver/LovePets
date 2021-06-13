import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IProduto } from '../model/IProduto.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.page.html',
  styleUrls: ['./listar-produtos.page.scss'],
})
export class ListarProdutosPage implements OnInit {
  listaProdutos: IProduto[] = [];

  constructor(private navCtrl: NavController, private produtosService: ProdutosService,
    private route: Router) { }

  ngOnInit() {
    this.carregarProdutos();
  }
  
  goback(){
    this.navCtrl.navigateBack('/tabs/petshops')
  }


  goatualizarproduto(){
    this.route.navigate(['atualizar-produto'])
  }


  goCadastrarProduto(){
    this.navCtrl.navigateForward('cadastrar-produto')
  }

  carregarProdutos(): void {
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listaProdutos = retorno;
    });
  }

}
