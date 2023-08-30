import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TiendaComponent } from './tienda/tienda.component';
import { BlogComponent } from './blog/blog.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EntradaComponent } from './entrada/entrada.component';

const routes: Routes = [
  
  
      {path: 'inicio', component: InicioComponent},
      {path: 'nosotros', component: NosotrosComponent},
      {path: 'tienda', component: TiendaComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'galeria', component: GaleriaComponent},
      {path: 'contacto', component: ContactoComponent},
      {path: 'entrada', component: EntradaComponent},
      {path: '**', redirectTo: 'inicio'}
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
