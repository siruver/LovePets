import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss'],
})
export class ListarProdutosComponent implements OnInit {


  listaProdutos: any[] = [
    {nome: 'Curso de angular', preco: 50.00, validade:'2021-12-31', id: 1},
    {nome: 'Curso de ionic', preco: 53.00, validade:'2021-12-31', id: 2}
]

  constructor() { }

  ngOnInit() {}

}
