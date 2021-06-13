import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EMPTY, Observable } from 'rxjs';
import { IProduto } from '../model/IProduto.model';
import { catchError, map } from 'rxjs/operators'

 

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable <IProduto[]> {
    return this.http.get<IProduto[]>(this.URL);
  }

  buscarPorId(id: number): Observable <IProduto> {
    return this.http.get<IProduto>(`${this.URL}/${id}`);
  }


  
  cadastrar(produto: IProduto): Observable<IProduto>{
    return this.http.post<IProduto>(this.URL, produto);
  }

  atualizar(produto: IProduto): Observable<IProduto>{
    return this.http.post<IProduto>(`${this.URL}/${produto.id}`, produto);

  }

 
}
