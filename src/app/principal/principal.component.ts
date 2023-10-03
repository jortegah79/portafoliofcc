import { Component } from '@angular/core';
import { urlFile } from './interfaces/urlFile.interface';
import { Proyecto } from './interfaces/proyecto.interface';

@Component({
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

 tecnologias:urlFile[]=[
  {url:"assets/php.png"},
  {url:"assets/angular.gif"},
  {url:"assets/phpslim.png"},
  {url:"assets/bootstrap.jpeg"},
  {url:"assets/typescript.png"},
  {url:"assets/java.png"},
  {url:"assets/github.png"},
];
proyectos:Proyecto[]=[
  {url:'https://jortegah79.github.io/mapsAPp',name:'Mapas',src:'assets/maps.png'},
  {url:'https://jortegah79.github.io/calculadora/',name:'Calculadora',src:'assets/calculadora.png'},
  {url:'https://jortegah79.github.io/GifsApp/',name:'GifsApp',src:'assets/giffAPp.png'},
  {url:'https://jortegah79.github.io/drum_machine/',name:'Drum machine',src:'assets/musicdrum.png'},
]

}
