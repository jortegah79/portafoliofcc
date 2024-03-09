import { Component } from '@angular/core';
import { urlFile } from './interfaces/urlFile.interface';
import { Proyecto } from './interfaces/proyecto.interface';

@Component({
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  tecnologias: urlFile[] = [
    { url: "assets/php.png" },
    { url: "assets/laravel.png" },
    { url: "assets/phpslim.png" },
    { url: "assets/javascript.png" },
    { url: "assets/angular.gif" },
    { url: "assets/typescript.png" },
    { url: "assets/bootstrap.jpeg" },
    { url: "assets/java.png" },
    { url: "assets/github.png" },
  ];
  proyectos: Proyecto[] = [
    { url: 'https://jortegah79.github.io/mapsAPp', name: 'Mapas', src: 'assets/maps.png' },
    { url: 'https://jortegah79.github.io/calculadora/', name: 'Calculadora', src: 'assets/calculadora.png' },
    { url: 'https://jortegah79.github.io/GifsApp/', name: 'GifsApp', src: 'assets/giffAPp.png' },
    { url: 'https://jortegah79.github.io/drum_machine/', name: 'Drum machine', src: 'assets/musicdrum.png' },
  ]
  title1 = `Bienvenido, visitante!`;
  texto1 = `Soy una persona que siempre tuvo un interés especial por la tecnología y por la informática,
 aunque no ha sido hasta los últimos años, cuando he tomado la decisión de entrar a este maravilloso mundo.
 Lo más interesante es poder encontrar soluciones a problemas de los usuarios para mejorar su experiencias.`;


  texto2 = "Obtuve el grado superior de DAW en junio de 2023.";
  texto3 = "Además obtuve una certificación de angular del curso angular desde 0 a experto de Fernando Herrera a través de Udemy.";
  texto4 = "Tengo conocimientos en Laravel, Php8, Mysql, Java, Javascript,TYpescript, Html,Css, Bootstrap y otras...";

  title2 = 'Experiencia laboral';
  texto5 = `Empecé a trabajar en mi empresa actual, Clickame S.l, en octubre de 2022 en la que sigo trabajando en la actualidad.`;
  texto6 = `En este tiempo he trabajado con Php, mysql, javascript, jquery y Bootrap de modo habitual en proyectos nuevos y manteniendo otros antiguos,
 entre los que se encuentran una aplicación de ticketing y todo su entorno o una tienda de venta de ropa infantil, y otros proyectos para dar soluciones para el kit digital.`;
  texto7 = `Por otra parte, y en menor medida, también he hecho uso de flutter, Angular o Ionic para generar o mantener aplicaciones.`;


}
