import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ProductDetailComponent } from './e-commerce/product/widget/product-detail/product-detail.component';
import { CheckoutComponent } from './e-commerce/product/widget/checkout/checkout.component';
import { CompareComponent } from './e-commerce/product/widget/compare/compare.component';
import { CartComponent } from './e-commerce/product/widget/cart/cart.component';
import { CollectionLeftSidebarComponent } from './e-commerce/product/widget/collection/collection-left-sidebar/collection-left-sidebar.component';
import { SuccessComponent } from './e-commerce/product/widget/success/success.component';

const routes: Routes = [
  {
    path: '',
    component: ECommerceComponent,
    data: {
      title: "ECommerce | Unice Landing Page"
    }
  },
  {
    path: 'e-commerce/left-sidebar/product/:id',
    component: ProductDetailComponent,
    data: {
      title: "Detail Page | Unice Landing Page"
    }
  },
  {
    path: 'e-commerce/checkout',
    component: CheckoutComponent,
    data: {
      title: "Checkout Page| Unice Landing Page"
    }
  },
  {
    path: 'e-commerce/checkout/success',
    component: SuccessComponent,
    data: {
      title: "Success Page| Unice Landing Page"
    }
  },
  {
    path: 'e-commerce/compare',
    component: CompareComponent,
    data: {
      title: "Compare Page| Unice Landing Page"
    }
  },
  {
    path: 'e-commerce/cart',
    component: CartComponent,
    data: {
      title: "Cart | Unice Landing Page"
    }
  },
  {
    path: 'e-commerce/left-sidebar/collection/:category',
    component: CollectionLeftSidebarComponent,
    data: {
      title: "Collection Page | Unice Landing Page"
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
