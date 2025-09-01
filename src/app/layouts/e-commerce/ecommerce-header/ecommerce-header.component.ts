import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../../shared/model/e-commerce/cart.model';
import { CartService } from '../../../shared/service/e-commerce/cart.service';
import { ProductsService } from '../../../shared/service/e-commerce/products.service';
import {AuthServiceService} from '../../../shared/service/auth-service.service';

@Component({
  selector: 'app-ecommerce-header',
  templateUrl: './ecommerce-header.component.html',
  styleUrls: ['./ecommerce-header.component.scss']
})
export class EcommerceHeaderComponent implements OnInit {
  public shoppingCartItems  :   CartItem[] = [];
  public  showItem: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private authservice: AuthServiceService, private cartService: CartService, private productService: ProductsService) { 
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  ngOnInit() {
    console.log("EcommerceHeaderComponent isLoggedIn",this.authservice.isLoggedIn());
    
   this.isLoggedIn =  this.authservice.isLoggedIn();
  }

  logout(){
    this.authservice.logout();
  }

  public updateCurrency(curr) {
    this.productService.currency = curr;
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }


}
