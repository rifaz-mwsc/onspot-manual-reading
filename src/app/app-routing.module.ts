import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ECommerceComponent } from './layouts/e-commerce/e-commerce.component'
import { LoginComponent } from './layouts/login/login.component';
import { HomeComponent } from './layouts/home/home.component';
import { MeterReadingListComponent } from './layouts/home/meter-reading-list/meter-reading-list.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'e-commerce',
    component: ECommerceComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
    {
    path: 'home',
    component: HomeComponent
  },
  {
  path: ':mruId', // dynamic parameter like /M0000
  component: MeterReadingListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
