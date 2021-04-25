import { SeguroService } from './../../services/seguro.service';
import { MarcaCarroService } from './../../services/marca-carro.service';
import { MarcaCarro } from './../models/MarcaCarro';
import { Observable } from 'rxjs';
import { Seguro } from './../models/Seguro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-seguro',
  templateUrl: './cadastro-seguro.component.html',
  styleUrls: ['./cadastro-seguro.component.css']
})
export class CadastroSeguroComponent implements OnInit {

  public seguro = new Seguro();
  public marcasCarro$: Observable<MarcaCarro[]>;

  constructor(
    private marcaCarroService: MarcaCarroService,
    private seguroService: SeguroService
  ) { }

  ngOnInit(): void {
    this.marcasCarro$ = this.marcaCarroService.getMarcas();
  }

  cadastrar(){
    this.seguroService.cadastrar(this.seguro);
  }

  adicionar(){}

  enviarNotificacao(){}
}
