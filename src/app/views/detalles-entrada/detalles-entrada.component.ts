import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-entrada',
  templateUrl: './detalles-entrada.component.html',
  styleUrls: ['./detalles-entrada.component.css']
})
export class DetallesEntradaComponent implements OnInit {
  public id: number | undefined;
  public entrada: any;
  entradaService: any;

  constructor(private activatedRoute: ActivatedRoute) { 



    this.activatedRoute.params.subscribe( paramsUrl => {
			this.id = +paramsUrl['id'];
		});
	}

  

  ngOnInit(): void {
    
    this.recuperarEntrada();
  }

  private recuperarEntrada(): void {

    this.entradaService.recuperarEntrada(this.id).subscribe(
      (data: any) => {
        this.entrada = data;
      }
    )
  }




  }


