import { Component } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto.interface';
import { ProyectComponent } from "../proyect/proyect.component";
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css'],
  imports: [ProyectComponent,CommonModule]
})
export class MyWorksComponent {

  proyectos: Proyecto[] = [
    { 
      url: 'https://www.ticketandmeet.com',
      name: 'Ticket & Meet',
      src: 'assets/img/ticketandmeet.png',
      text: "He formado parte activa en la contrucción de la plataforma de ticketing, gestión de listas de invitados, control de accesos y muchas otras cosas..." 
    },
    { 
      url: 'https://newsapp-d5da4.web.app', 
      name: `John's News`, 
      src: 'assets/img/newsApp.png',
      text:"Aplicación para practicar Ionic y pwa, que obtiene datos desde una api y los gestiona mostrando una interfaz de usuario cómoda."
    },
    { 
      url: 'https://jortegah79.github.io/mapsAPp', 
      name: 'Mapas', 
      src: 'assets/img/maps.png',
      text:"Esta utilidad de mapas hace uso de la biblioteca Leaflet para mostrar y marcar posiciones en un mapa en Angular 14." 
    },
    { 
      url: 'https://jortegah79.github.io/pipesApp/', 
      name: 'Pipes Angular', 
      src: 'assets/img/pipes.png',
      text:"Esto forma parte de un ejercicio en el que usé PrimeNg para la parte visual y los diferentes pipes de Angular." 
    },
  ]
 
}
