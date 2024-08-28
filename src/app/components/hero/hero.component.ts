import { Component } from '@angular/core';
import { TextoComponent } from "../texto/texto.component";
import { TitleComponent } from "../title/title.component";
import 'animate.css';
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
  texto2 = "Desde mis inicios en el desarrollo, trato de aplicar soluciones a problemas concretos, tanto en la parte del backend como en la de frontend, intentando aportar cada día un paso más y manteniendo la calidad y legibilidad del código. ";

  title3 = "Experiéncia";
  texto3 = "Durante éste tiempo he trabajado para la consultora Clickame S.L, en la que he realizado aplicaciones de soporte de datos, he creado una plataforma de ticketing,control de accesos y lista de invitados entre otras cosas.";
  texto4 = "Además he realizado actualizaciones de aplicaciones de movil en ionic- Angular y en flutter. Dentro del mundo movil, he creado apis en Laravel y PhpSlim y aplicaciones en Ionic para Ios y android.";


}
