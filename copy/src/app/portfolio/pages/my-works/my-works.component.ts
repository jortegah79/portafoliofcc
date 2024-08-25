import { Component } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css']
})
export class MyWorksComponent {

  proyectos: Proyecto[] = [
    { url: 'https://jortegah79.github.io/mapsAPp', name: 'Mapas', src: 'assets/maps.png' },
    { url: 'https://jortegah79.github.io/calculadora/', name: 'Calculadora', src: 'assets/calculadora.png' },
    { url: 'https://jortegah79.github.io/GifsApp/', name: 'GifsApp', src: 'assets/giffAPp.png' },
    { url: 'https://jortegah79.github.io/drum_machine/', name: 'Drum machine', src: 'assets/musicdrum.png' },
  ]
 
}
