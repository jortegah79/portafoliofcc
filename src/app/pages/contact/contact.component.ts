import { Component } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
