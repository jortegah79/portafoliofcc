import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ruta } from '../../interfaces/ruta.interface';

@Component({
  standalone:true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports:[RouterLink,CommonModule],

})
export class NavbarComponent {
 
  rutas: Ruta[] = [{
    title: "Inicio",
    path: "portfolio"
  },
  {
    title: "Contacto",
    path: "contact"
  }];


}