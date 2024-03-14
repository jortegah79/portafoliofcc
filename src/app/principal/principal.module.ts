import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal.component';



@NgModule({
  declarations: [  
    PrincipalComponent, 
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ],providers:[
    Router,RouterLink
  ]
})
export class PrincipalModule { }
