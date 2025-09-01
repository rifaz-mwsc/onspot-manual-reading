import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'swiper/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountToModule } from 'angular-count-to';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { SharedModule } from '../shared/shared.module'


// E-commerce Layout
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { EcommerceBannerSliderComponent } from './e-commerce/ecommerce-banner-slider/ecommerce-banner-slider.component';
import { EcommerceHeaderComponent } from './e-commerce/ecommerce-header/ecommerce-header.component';
import { EcommerceProductSliderComponent } from './e-commerce/ecommerce-product-slider/ecommerce-product-slider.component';
import { EcommerceParallaxBannerComponent } from './e-commerce/ecommerce-parallax-banner/ecommerce-parallax-banner.component';
import { EcommerceProductTabComponent } from './e-commerce/ecommerce-product-tab/ecommerce-product-tab.component';
import { EcommerceDownBannerComponent } from './e-commerce/ecommerce-down-banner/ecommerce-down-banner.component';
import { EcommerceRecentStoryComponent } from './e-commerce/ecommerce-recent-story/ecommerce-recent-story.component';
import { EcommerceFooterComponent } from './e-commerce/ecommerce-footer/ecommerce-footer.component';
import { SidebarComponent } from './e-commerce/product/widget/product-detail/sidebar/sidebar.component';
import { ProductDetailsComponent } from './e-commerce/product/widget/product-detail/product-details/product-details.component';
import { ProductDetailComponent } from './e-commerce/product/widget/product-detail/product-detail.component';
import { CheckoutComponent } from './e-commerce/product/widget/checkout/checkout.component';
import { CompareComponent } from './e-commerce/product/widget/compare/compare.component';
import { CartComponent } from './e-commerce/product/widget/cart/cart.component';
import { CollectionLeftSidebarComponent } from './e-commerce/product/widget/collection/collection-left-sidebar/collection-left-sidebar.component';
import { ColorComponent } from './e-commerce/product/widget/collection/filter/color/color.component';
import { BrandComponent } from './e-commerce/product/widget/collection/filter/brand/brand.component';
import { PriceComponent } from './e-commerce/product/widget/collection/filter/price/price.component';
import { CategoriesComponent } from './e-commerce/product/widget/collection/filter/categories/categories.component';
import { NewProductComponent } from './e-commerce/product/widget/new-product/new-product.component';
import { ProductBoxComponent } from './e-commerce/product/widget/product-box/product-box.component';
import { SuccessComponent } from './e-commerce/product/widget/success/success.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MeterReadingListComponent } from './home/meter-reading-list/meter-reading-list.component';
import { MeterReadingMruListComponent } from './home/meter-reading-mru-list/meter-reading-mru-list.component';
import { MeterReadingBannerComponent } from './home/meter-reading-banner/meter-reading-banner.component';


@NgModule({
  declarations: [
    ECommerceComponent,
    EcommerceBannerSliderComponent,
    EcommerceHeaderComponent,
    EcommerceProductSliderComponent,
    EcommerceParallaxBannerComponent,
    EcommerceProductTabComponent,
    EcommerceDownBannerComponent,
    EcommerceRecentStoryComponent,
    EcommerceFooterComponent,
    SidebarComponent,
    ProductDetailsComponent,
    ProductDetailComponent,
    CheckoutComponent,
    CompareComponent,
    CartComponent,
    CollectionLeftSidebarComponent,
    ColorComponent,
    BrandComponent,
    PriceComponent,
    CategoriesComponent,
    NewProductComponent,
    ProductBoxComponent,
    SuccessComponent,
    LoginComponent,
    HomeComponent,
    MeterReadingListComponent,
    MeterReadingMruListComponent,
    MeterReadingBannerComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    SharedModule,
    CountToModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
  ],
})

export class LayoutsModule { }
