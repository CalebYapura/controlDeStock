import { NgModule } from "@angular/core";
// Modules
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
//RUTAS HIJAS 
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  exports: [//para que de puedan acceder desde cualquier logar 
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ], imports: [
    SharedModule,
    PAGES_ROUTES,//sus propias rutas
    FormsModule
  ]
})
export class PagesModule { }
