import { Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';

export const routes: Routes = [
    {
        path: "",
        component: TemplateComponent,
        children: [
            {
                path: "portfolio",
                loadComponent: () => import('./pages/portfolio/portfolio.component').then(p => p.PortfolioComponent)
            },
            {
                path: "contact",
                loadComponent: () => import('./pages/contact/contact.component').then(p => p.ContactComponent)
            },
            {
                path: "",
                pathMatch: 'full',
                redirectTo: "portfolio"
            },
            {
                path: "**",
                redirectTo: ""
            },
        ]
    },
    {
        path: "**",
        redirectTo: ""
    }];


