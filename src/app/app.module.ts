import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { ComponentsModule } from "./components/components.module";


@NgModule({
    declarations: [
        AppComponent,
        PrincipalComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule
    ]
})
export class AppModule { }
