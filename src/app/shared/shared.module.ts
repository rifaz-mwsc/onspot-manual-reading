import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { OrderByPipe } from './pipes/order-by.pipe';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [MenuComponent, TapToTopComponent, OrderByPipe, LoaderComponent],
  exports: [
    MenuComponent,
    LoaderComponent,
    TapToTopComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot()
  ]
})
export class SharedModule { }
