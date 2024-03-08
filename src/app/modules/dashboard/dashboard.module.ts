import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardSidebarComponent } from './components/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { DashboardProductsListComponent } from './components/pages/dashboard-products-list/dashboard-products-list.component';
import { DashboardMainPageComponent } from './components/pages/dashboard-main-page/dashboard-main-page.component';
import { DashboardComponent } from './dashboard.component';
import { PersianDatePipe } from '../../pipes/persiandate/persian-date.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardSidebarComponent,
    DashboardNavbarComponent,
    DashboardProductsListComponent,
    DashboardMainPageComponent,
    PersianDatePipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
