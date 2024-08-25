import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from '../portfolio/pages/formulario/formulario.component';
import { HeroComponent } from '../portfolio/pages/hero/hero.component';
import { MyWorksComponent } from '../portfolio/pages/my-works/my-works.component';


const routes: Routes = [
  {
    path:"",      
  
    children:[
    {
      path:"inicio",
      component:HeroComponent,
    },
    {
      path:"works",
      component:MyWorksComponent,
    },
    {
      path:"contacto",
      component:FormularioComponent,
      
    },
    {
      path: '**',
      redirectTo: 'inicio',
      pathMatch: 'full',
    }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
