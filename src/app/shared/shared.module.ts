import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
