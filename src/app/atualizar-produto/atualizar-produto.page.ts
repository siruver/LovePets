import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IProduto } from '../model/IProduto.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.page.html',
  styleUrls: ['./atualizar-produto.page.scss'],
})
export class AtualizarProdutoPage implements OnInit {

  produto: IProduto = {
    nome: null,
    validade: null,
    preco: null
  };


  constructor(private nav: NavController, 
    private produtosService: ProdutosService, 
    private router: Router, 
    private activatedRouter: ActivatedRoute) { }

  ngOnInit():void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.produtosService.buscarPorId(id).subscribe(retorno =>{
      this.produto = retorno;
    });
  }

  voltalistarprodutos(){
    this.nav.navigateBack('listar-produtos');
  }

  salvarProduto():void{
    this.produtosService.cadastrar(this.produto).subscribe(retorno =>{
      this.produto = retorno;

      this.router.navigate(['listar-produtos']);
    });
  }

}
