import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { UnderConstructionComponent } from '../../components/under-construction/under-construction.component';
import { DashboardMainPageComponent } from './components/pages/dashboard-main-page/dashboard-main-page.component';
import { DashboardProductsListComponent } from './components/pages/dashboard-products-list/dashboard-products-list.component';
import { DashboardSinglePageEditComponent } from './components/pages/dashboard-single-page-edit/dashboard-single-page-edit.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: DashboardMainPageComponent },
      {
        path: 'products',
        component: DashboardProductsListComponent,
      },
      {
        path: 'products/:id',
        component: DashboardSinglePageEditComponent,
      },
      { path: '**', component: UnderConstructionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
