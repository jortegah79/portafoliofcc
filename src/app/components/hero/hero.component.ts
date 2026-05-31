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
 title1 = `Bienvenido`;
texto1 = `Mi nombre es...`;

title2 = 'Full Stack Developer';
texto2 =
`Desarrollo aplicaciones empresariales, APIs REST, paneles de control y soluciones multiplataforma utilizando tecnologías modernas como Laravel, Angular, NextJS y NestJS.`;

texto3 =
`Experiencia en integraciones empresariales, sistemas de ticketing, control de accesos, plataformas de gestión y aplicaciones orientadas a procesos de negocio reales.`;

texto4 =
`Especializado en backend con PHP y TypeScript, desarrollo frontend moderno, PWAs, aplicaciones móviles híbridas y gestión de bases de datos MySQL y PostgreSQL.`;
texto5=`Descarga mi curriculum`
  /* title1 = `Bienvenido, visitante!`;
  texto1 = `Mi nombre es ...`;

  title2 = 'Full Stack Developer';
  texto2 = "Desarrollo soluciones para problemas reales que abarcan paneles de control, gestión de procesos y usuarios, tareas programadas, gestión de bases de datos, entre otras soluciones en el backend. También incluyo soluciones en la usabilidad y experiencia de usuario en el frontend, tanto en apps, como en PWAs o en aplicaciones móviles.";

  title3 = "Experiéncia";
  texto3 = "En mi experiencia laboral trabajando para Clickame S.L., he realizado aplicaciones de soporte de datos, he aportado valor generando una plataforma de ticketing con gestión de accesos y listas de invitados, aplicaciones para el control de turnos de riego, sincronizadores de datos entre aplicativos, pudiendo aprender de cada proyecto y entender la integración entre modelo de negocio y la aplicación concreta de soluciones necesarias.";
  texto4 = "He trabajado en proyectos en diferentes lenguajes de programación tanto en backend, en PHP, Laravel, PHP Slim o NestJS, como en frontend, en Angular, Ionic, React, Flutter, Bootstrap, Tailwind, entre otros. Mis lenguajes de preferencia son PHP y TypeScript. He trabajado con bases de datos como MySQL, SQLite, PostgreSQL, entre otras.";
 */

  

}
