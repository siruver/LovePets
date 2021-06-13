import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IProduto } from '../model/IProduto.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
})
export class CadastrarProdutoPage implements OnInit {

  produto: IProduto = {
    nome: null,
    validade: null,
    preco: null
  };


  constructor(private nav: NavController, private produtosService: ProdutosService, private router: Router) { }

  ngOnInit() {
  }

  voltalistarprodutos(){
    this.nav.navigateBack('listar-produtos')
  }

  salvarProduto():void{
    this.produtosService.cadastrar(this.produto).subscribe(retorno =>{
      this.produto = retorno;

      this.router.navigate(['listar-produtos']);
    });
  }

}
