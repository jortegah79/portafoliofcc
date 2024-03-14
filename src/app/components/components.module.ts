import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from '../portfolio/pages/formulario/formulario.component';
import { HeroComponent } from '../portfolio/pages/hero/hero.component';
import { MyWorksComponent } from '../portfolio/pages/my-works/my-works.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProyectComponent } from './proyect/proyect.component';
import { SkillsComponent } from './skills/skills.component';
import { TextoComponent } from './texto/texto.component';
import { TitleComponent } from './title/title.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent,
    FormularioComponent,
    HeroComponent,
    MyWorksComponent,
    NavbarComponent,
    ProyectComponent,
    SkillsComponent,
    TextoComponent,
    TitleComponent,
  ],
  exports: [
    ProyectComponent,
    TextoComponent,
    TitleComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    SkillsComponent,
    FormularioComponent,
    MyWorksComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class ComponentsModule { }
