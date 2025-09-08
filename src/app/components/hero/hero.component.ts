import { Component } from '@angular/core';
import { TextoComponent } from "../texto/texto.component";
import { TitleComponent } from "../title/title.component";
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports: [TextoComponent, TitleComponent,CommonModule]
})
export class HeroComponent {

  title1 = `Bienvenido, visitante!`;
  texto1 = `Mi nombre es ...`;

  title2 = 'Soy desarrollador Web';
  texto2 = "Desarrollo soluciones para problemas reales que abarcan paneles de control, gestión de procesos y usuarios o tareas programadas en el backend. También incluye soluciones en la usabilidad y experiencia de usuario en el frontend, tanto en apps, como en pwas o en aplicaciones moviles.";

  title3 = "Experiéncia";
  texto3 = "Durante éste tiempo he trabajado para la consultora Clickame S.L, en la que he realizado aplicaciones de soporte de datos, he creado una plataforma de ticketing,control de accesos y lista de invitados entre otras cosas.";
  texto4 = "He trabajado proyectos en diferentes lenguajes de programación tanto en backend, en php, Laravel, Php SLim o Nestjs, como en frontend, en Angular, Ionic, React, flutter, Bootstrap, Tailwind, entre otros. Mis lenguajes de preferencia son PHP y Typescript.";


}
