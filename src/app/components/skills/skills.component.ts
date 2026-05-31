import { Component } from '@angular/core';
import { urlFile } from '../../interfaces/urlFile.interface';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule]
})
export class SkillsComponent {
/* 
 
  tecnologias: urlFile[] = [
    { url: "assets/img/php.png",title:"Php 8.3^" },
    { url: "assets/img/laravel.png",title:'Laravel 12' },
    { url: "assets/img/phpslim.png",title:'Php Slim 4' },
    { url: "assets/img/nestjs.png",title:"Nest js" },
    { url: "assets/img/nrgx.svg",title:'Gestión de estados Ngrx Signals' },    
    { url: "assets/img/mysql.png",title:'Mysql' },
    { url: "assets/img/tailwind.png",title:'Tailwind' },
    { url: "assets/img/javascript.png",title:'Javascript' },
    { url: "assets/img/typescript.png",title:'Typescript' },
    { url: "assets/img/angular.gif",title:"Angular 20" },
    { url: "assets/img/ionic.png",title:'Ionic' },
    { url: "assets/img/react.svg",title:'React 17' },
    { url: "assets/img/bootstrap.jpeg",title:'Bootstrap 5.3' },
    { url: "assets/img/flutter.png",title:'Flutter 3^' },
    { url: "assets/img/github.png",title:'Github' },
    { url: "assets/img/linux.webp",title:'Linux' },
  ];
}
 */

 
  tecnologias: urlFile[] = [
    { url: "assets/img/php.png",title:"Php 8.3^" },
    { url: "assets/img/laravel.png",title:'Laravel 13' },   
    { url: "assets/img/nestjs.png",title:"Nestjs" },    
    { url: "assets/img/mysql.png",title:'Mysql' },
    { url: "assets/img/tailwind.png",title:'Tailwind' },
    { url: "assets/img/bootstrap.jpeg",title:'Bootstrap 5.3' },
    { url: "assets/img/javascript.png",title:'Javascript' },
    { url: "assets/img/typescript.png",title:'Typescript' },
    { url: "assets/img/angular.gif",title:"Angular 20" },
    { url: "assets/img/ionic.png",title:'Ionic-capacitor' },
    { url: "assets/img/react.svg",title:'nextjs' },   
    { url: "assets/img/github.png",title:'Github' },
    { url: "assets/img/linux.webp",title:'Linux' },
  ];
}
