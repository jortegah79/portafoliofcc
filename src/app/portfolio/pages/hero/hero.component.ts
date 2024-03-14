import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  title1 = `Bienvenido, visitante!`;
  texto1 = `Soy una persona que siempre tuvo un interés especial por la tecnología y por la informática,
 aunque no ha sido hasta los últimos años, cuando he tomado la decisión de entrar a este maravilloso mundo.
 Lo más interesante es poder encontrar soluciones a problemas de los usuarios para mejorar su experiencias.`;
  title2 = 'Más Sobre mí';
  texto2 = "Me considero una persona con capacidad de aprendizaje, trabajo en equipo y buen trato personal. Aunque trabajo como programador backend, disfruto de todas las tecnologías, ya que todas tienen algo que las hace únicas.";

  texto3 = "Dispongo del título de DAW. Además he tomado diversos cursos mediante plataformas como UDEMY o Youtube.";
  texto4 = "También estoy aprendiendo inglés por medio del instituto EOI-IOC.";


}
