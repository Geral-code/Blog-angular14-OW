import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { DetallesEntradaComponent } from './views/detalles-entrada/detalles-entrada.component';
import { FrontComponent } from './views/front/front.component';
import { ListadoComponent } from './views/listado/listado.component';
import { LoginComponent } from './views/login/login.component';
import { PaginaNoencontradaComponent } from './views/pagina-noencontrada/pagina-noencontrada.component';

const  routes: Routes = [

  { path: 'login', component: LoginComponent},

  
  { path: 'front', component: FrontComponent, children:[
    {path: 'listado', component: ListadoComponent },
    { path: 'nosotros', component: AcercaDeNosotrosComponent},
    {path: 'detalle-entrada/:id', component: DetallesEntradaComponent}
  ] },

 
  

  { path: '', redirectTo: 'front/listado', pathMatch: 'full'},
  { path: '**', component: PaginaNoencontradaComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot (routes)  ]
})
export class AppRoutingModule { }

