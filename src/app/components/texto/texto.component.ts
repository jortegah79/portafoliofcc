import { Component, Input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'texto-component',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent {

  @Input() title = "";
  @Input() texto  = "";

}
