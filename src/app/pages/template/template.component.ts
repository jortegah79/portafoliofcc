import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { IonRouterOutlet } from "@ionic/angular/standalone";
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterModule, NavbarComponent,FooterComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

}
