import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
})
export class ContadorComponent {
    contador: number = 0;
    base: number = 5;
  
    // onAdd() {
    //   this.contador += 1;
    // }
  
    // onSubstract() {
    //   this.contador -= 1;
    // }
  
    acumular(valor: number) {
      this.contador += valor
    }
}