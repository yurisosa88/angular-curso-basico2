import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  //@Input() personajesListado: Personaje[] = []; 
  
  get personajes() {
    return this.dbzService.personajes
   }

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

}
