import { NgModule } from "@angular/core";
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



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
        NopagefoundComponent
    ]
})
export class SharedModule { }