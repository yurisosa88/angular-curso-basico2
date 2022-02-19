import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Iron Man', 'Hulk', 'Spiderman', 'Thor', 'Capitán América'];
  //heroeBorrado: string | undefined = '';
  heroeBorrado: string = '';

  borrarHeroe() {
    //this.heroes.splice(1,1);
      this.heroeBorrado = this.heroes.shift() || '';
  }

}
