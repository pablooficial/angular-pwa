import { Observable } from 'rxjs';
import { Seguro } from './../components/models/Seguro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SeguroService {
  private API_SEGUROS = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  cadastrar(seguro: Seguro){
    this.http.post(this.API_SEGUROS + '/api/seguros', seguro)
    .subscribe(
      () => alert('Seguro cadastrado com sucesso'),
      (err) => console.log('Erro ao cadastrar seguro')
    );
  }

  listar():Observable<Seguro[]>{
    return this.http.get<Seguro[]>(this.API_SEGUROS + '/api/seguros')
  }

}
