import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardSidebarComponent } from './components/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { DashboardProductsListComponent } from './components/pages/dashboard-products-list/dashboard-products-list.component';
import { DashboardMainPageComponent } from './components/pages/dashboard-main-page/dashboard-main-page.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardSinglePageEditComponent } from './components/pages/dashboard-single-page-edit/dashboard-single-page-edit.component';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterProductsPipe } from './pipes/filterproduct/filter-product.pipe';
import { PersianDatePipe } from './pipes/perisandate/persian-date.pipe';
import { DashboardPostProductComponent } from './components/pages/dashboard-post-product/dashboard-post-product.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardSidebarComponent,
    DashboardNavbarComponent,
    DashboardProductsListComponent,
    DashboardMainPageComponent,
    DashboardSinglePageEditComponent,
    FilterProductsPipe,
    PersianDatePipe,
    DashboardPostProductComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    NgbDropdownModule,
  ],
})
export class DashboardModule {}
