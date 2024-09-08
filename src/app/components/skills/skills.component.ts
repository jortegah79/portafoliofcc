import { Component } from '@angular/core';
import { urlFile } from '../../interfaces/urlFile.interface';
import { CommonModule } from '@angular/common';
import { TextoComponent } from "../texto/texto.component";

@Component({
  standalone:true,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule, TextoComponent]
})
export class SkillsComponent {

 
  tecnologias: urlFile[] = [
    { url: "assets/img/php.png",title:"Php 8.3^" },
    { url: "assets/img/laravel.png",title:'Laravel 10^' },
    { url: "assets/img/phpslim.png",title:'Php Slim 4' },
    { url: "assets/img/javascript.png",title:'Javascript' },
    { url: "assets/img/angular.gif",title:"Angular 18" },
    { url: "assets/img/typescript.png",title:'Typescript' },
    { url: "assets/img/nrgx.svg",title:'Gestión de estados Ngrx Signals' },    
    { url: "assets/img/ionic.png",title:'Ionic' },
    { url: "assets/img/bootstrap.jpeg",title:'Bootstrap 5.3' },
    { url: "assets/img/mysql.png",title:'Mysql' },
    { url: "assets/img/flutter.png",title:'Flutter 3^' },
    { url: "assets/img/github.png",title:'Github' },
    { url: "assets/img/linux.webp",title:'Linux' },
  ];
}
