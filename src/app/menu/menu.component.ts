import { Component, OnInit } from '@angular/core';
import { TokenService } from '../share/services/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // Atributos
  public miToken: number;
  public nombreUsuario: string | null;  

  constructor(private tokenService: TokenService) {
    this.miToken = 0;
    this.nombreUsuario = '';
    
   }

  ngOnInit(): void {

    this.tokenService.token$.subscribe(
      (token: number) => {
        this.miToken = token;
      }
    )
  

 

}
}