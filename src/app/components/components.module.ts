import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectComponent } from './proyect/proyect.component';
import { TextoComponent } from './texto/texto.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    ProyectComponent,
    TextoComponent,
    TitleComponent
  ],
  exports:[
    ProyectComponent,
    TextoComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
