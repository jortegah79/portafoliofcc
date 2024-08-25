import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ComponentsModule
  ]
})
export class PortfolioModule { }
