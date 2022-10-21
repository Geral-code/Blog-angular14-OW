import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/share/interface/entrada';
import { EntradaService } from 'src/app/share/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  //Atributos

  public listadoEntradas: any;

  constructor(private entradaService: EntradaService) { 
    this.listadoEntradas = [];


  }

  ngOnInit(): void {
    this.recuperarEntradas();
  }

  private recuperarEntradas(): void {
    this.entradaService.recuperarEntradas().subscribe( (data) => {
      this.listadoEntradas = data;

    },
    (error) => {

    },
    () => {

    }
    
    )
  }

  public mostrarTitulo(titulo: string): void {
  alert(`Entrada seleccionada: ${ titulo }.`);
  }

}
