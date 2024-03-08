import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSidebarComponent } from './dashboard/components/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardNavbarComponent } from './dashboard/components/dashboard-navbar/dashboard-navbar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardSidebarComponent,
    DashboardNavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
