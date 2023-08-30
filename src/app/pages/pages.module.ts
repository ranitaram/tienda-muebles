import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TiendaComponent } from './tienda/tienda.component';
import { BlogComponent } from './blog/blog.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { EntradaComponent } from './entrada/entrada.component';


@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    TiendaComponent,
    BlogComponent,
    GaleriaComponent,
    ContactoComponent,
    EntradaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class PagesModule { }
