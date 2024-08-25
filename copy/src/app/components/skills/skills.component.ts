import { Component } from '@angular/core';
import { urlFile } from 'src/app/interfaces/urlFile.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {


  tecnologias: urlFile[] = [
    { url: "assets/php.png" },
    { url: "assets/laravel.png" },
    { url: "assets/phpslim.png" },
    { url: "assets/javascript.png" },
    { url: "assets/angular.gif" },
    { url: "assets/typescript.png" },
    { url: "assets/bootstrap.jpeg" },
    { url: "assets/java.png" },
    { url: "assets/github.png" },
  ];
}
