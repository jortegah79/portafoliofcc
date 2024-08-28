import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'title-component',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
@Input() titulo="";
@Input() subtitulo="";
//titulo="Me llamo ";
//subtitulo="... y soy Desarrollador Web.";

}
