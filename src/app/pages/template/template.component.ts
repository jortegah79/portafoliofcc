import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { urlFile } from '../../interfaces/urlFile.interface';
import { Proyecto } from '../../interfaces/proyecto.interface';
import { Ruta } from '../../interfaces/ruta.interface';
import { CommonModule } from '@angular/common';
import { ProyectComponent } from '../../components/proyect/proyect.component';
import { TextoComponent } from '../../components/texto/texto.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterModule, NavbarComponent,FooterComponent,RouterLink,CommonModule,TextoComponent,TitleComponent,ProyectComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  title1 = `Bienvenido, visitante!`;
  texto1 = `Mi nombre es ...`;

  title2 = 'Soy desarrollador Web';
  texto2 = "Desarrollo soluciones para problemas reales que abarcan paneles de control, gestión de procesos y usuarios, tareas programadas, gestión de bases de datos, entre otras soluciones en el backend. También incluyo soluciones en la usabilidad y experiencia de usuario en el frontend, tanto en apps, como en PWAs o en aplicaciones móviles.";

  title3 = "Experiéncia";
  texto3 = "En mi experiencia laboral trabajando para Clickame S.L., he realizado aplicaciones de soporte de datos, he aportado valor generando una plataforma de ticketing con gestión de accesos y listas de invitados, aplicaciones para el control de turnos de riego, sincronizadores de datos entre aplicativos, pudiendo aprender de cada proyecto y entender la integración entre modelo de negocio y la aplicación concreta de soluciones necesarias.";
  texto4 = "He trabajado en proyectos en diferentes lenguajes de programación tanto en backend, en PHP, Laravel, PHP Slim o NestJS, como en frontend, en Angular, Ionic, React, Flutter, Bootstrap, Tailwind, entre otros. Mis lenguajes de preferencia son PHP y TypeScript. He trabajado con bases de datos como MySQL, SQLite, PostgreSQL, entre otras.";


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
      url: 'https://jortegah79.github.io/enjoy/', 
      name: 'Enjoy', 
      src: 'assets/img/enjoy.png',
      text:"Pwa en Angular 20 con señales, y testing con actualización de datos y mapa.Usando Tailwind css" 
    },
    { 
      url: 'https://jortegah79.github.io/pipesApp/', 
      name: 'Pipes Angular', 
      src: 'assets/img/pipes.png',
      text:"Esto forma parte de un ejercicio en el que usé PrimeNg para la parte visual y los diferentes pipes de Angular." 
    },
  ]
  

 
  tecnologias: urlFile[] = [
    { url: "assets/img/php.png",title:"Php 8.3^" },
    { url: "assets/img/laravel.png",title:'Laravel 12' },
    { url: "assets/img/phpslim.png",title:'Php Slim 4' },
    { url: "assets/img/nestjs.png",title:"Nest js" },
    { url: "assets/img/nrgx.svg",title:'Gestión de estados Ngrx Signals' },    
    { url: "assets/img/mysql.png",title:'Mysql' },
    { url: "assets/img/tailwind.png",title:'Tailwind' },
    { url: "assets/img/javascript.png",title:'Javascript' },
    { url: "assets/img/typescript.png",title:'Typescript' },
    { url: "assets/img/angular.gif",title:"Angular 20" },
    { url: "assets/img/ionic.png",title:'Ionic' },
    { url: "assets/img/react.svg",title:'React 17' },
    { url: "assets/img/bootstrap.jpeg",title:'Bootstrap 5.3' },
    { url: "assets/img/flutter.png",title:'Flutter 3^' },
    { url: "assets/img/github.png",title:'Github' },
    { url: "assets/img/linux.webp",title:'Linux' },
  ];


  rutas: Ruta[] = [{
    title: "Inicio",
    path: "portfolio"
  },
  {
    title: "Contacto",
    path: "contact"
  }];


}
