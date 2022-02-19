import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
 
  nuevoPersonaje: Personaje = {
    nombre: 'Yuri',
    poder: 1000000
  }

}
