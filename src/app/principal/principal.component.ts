import { Component } from '@angular/core';

interface urlFile{
  url:string;
}
@Component({
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

 tecnologias:urlFile[]=[
  {url:"./../../assets/php.png"},
  {url:"./../../assets/angular.gif"},
  {url:"./../../assets/phpslim.png"},
  {url:"./../../assets/bootstrap.jpeg"},
  {url:"./../../assets/typescript.png"},
  {url:"./../../assets/java.png"},
  {url:"./../../assets/github.png"},
]

}
