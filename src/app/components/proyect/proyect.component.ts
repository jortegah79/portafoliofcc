import { Component, Input } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto.interface';

@Component({
  standalone:true,
  selector: 'proyecto',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent {
@Input()
proyecto!:Proyecto;

}
