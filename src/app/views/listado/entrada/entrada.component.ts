import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entrada } from 'src/app/share/interface/entrada';
import { __makeTemplateObject } from 'tslib';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  @Input()
  public entrada: any;
  @Output()
  public doEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.entrada = {
      title: '',
      body: '',
      id: 1,
      userId: 1


    }
   }

  ngOnInit(): void {
  }

  public lanzarTitulo(): void {
    this.doEvent.emit(this.entrada.body);
  } 

}