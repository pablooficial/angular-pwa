import { Seguro } from './../models/Seguro';
import { Observable } from 'rxjs';
import { SeguroService } from './../../services/seguro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-seguros',
  templateUrl: './listar-seguros.component.html',
  styleUrls: ['./listar-seguros.component.css']
})
export class ListarSegurosComponent implements OnInit {

  public seguros$: Observable<Seguro[]>

  constructor(
    private seguroService:SeguroService
  ) { }

  ngOnInit(): void {
    this.seguros$ = this.seguroService.listar();
  }

}
