import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [  
    
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    ComponentsModule
  ]
})
export class PrincipalModule { }
