import { Component, inject } from '@angular/core';
import { PrincipalComponent } from '../../principal/principal.component';
import { Ruta } from '../../interfaces/ruta.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent {

 
  routes = inject(RouterModule);

  rutas: Ruta[] = [{
    title: "Inicio",
    path: "inicio"
  },
  {
    title: "Trabajos",
    path: "my-works"
  },
  {
    title: "Contacto",
    path: "contacto"
  }];


}