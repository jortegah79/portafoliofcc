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
    { url: "assets/img/php.png" },
    { url: "assets/img/laravel.png" },
    { url: "assets/img/phpslim.png" },
    { url: "assets/img/javascript.png" },
    { url: "assets/img/angular.gif" },
    { url: "assets/img/typescript.png" },
    { url: "assets/img/bootstrap.jpeg" },
    { url: "assets/img/ionic.png" },
    { url: "assets/img/mysql.png" },
    { url: "assets/img/flutter.png" },
    { url: "assets/img/github.png" },
    { url: "assets/img/linux.webp" },
  ];
}
