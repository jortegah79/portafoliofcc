import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HeroComponent } from './pages/hero/hero.component';
import { MyWorksComponent } from './pages/my-works/my-works.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
 /*   children: [
      {
        path: 'inicio', component: HeroComponent
      },
      {
        path: 'my-works', component: MyWorksComponent
      },
      {
        path: 'contacto', component: FormularioComponent
      },
      {
        path:'',
        redirectTo:'inicio',
        pathMatch:'full'      
      }
      ,{
        path:'**',redirectTo:'inicio'
      }
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
