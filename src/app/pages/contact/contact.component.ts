import { Component } from '@angular/core';
import { NavbarComponent} from '../../components/navbar/navbar.component';
import { FormularioComponent } from '../../components/formulario/formulario.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormularioComponent,NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
