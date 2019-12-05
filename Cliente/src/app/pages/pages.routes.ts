import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductoComponent } from './producto/producto.component';


//import { NgFor } from '@angular/common';


const pagesRoutes: Routes = [
    {
        path: "",
        component: PagesComponent,
        children: [
            { path: "dashboard", component: DashboardComponent },
            { path: "progress", component: ProgressComponent },
            { path: "graficas1", component: Graficas1Component },
            { path: "categoria", component: CategoriaComponent },
            { path: "proveedor", component: ProveedorComponent },
            { path: "cliente", component: ClienteComponent },
            { path: "producto", component: ProductoComponent },

            { path: "", redirectTo: "/dashboard", pathMatch: "full" }
        ]
    },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);