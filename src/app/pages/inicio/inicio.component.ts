import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //ruta de la imagen
  backgroundImageUrl = 'url("/assets/img/principal.jpg")';
  backgroundImageGradientUrl = 'url("/assets/img/principal.jpg")';

}
