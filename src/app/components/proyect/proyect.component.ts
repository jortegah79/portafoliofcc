import { Component, Input } from '@angular/core';
import { Proyecto } from '../../principal/interfaces/proyecto.interface';

@Component({
  selector: 'proyecto',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent {
@Input()
proyecto!:Proyecto;

}
