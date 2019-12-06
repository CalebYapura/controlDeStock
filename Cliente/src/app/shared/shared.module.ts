import { NgModule } from "@angular/core";
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        BreadcumbsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent
    ], exports: [
        BreadcumbsComponent,
        HeaderComponent,
        SidebarComponent,
        NopagefoundComponent,
       
        
    ],
    imports: [
       RouterModule

    ]
    
})
export class SharedModule { }