import { Component } from '@angular/core';
import { ShoppingMall } from '../shared/models/shoppingMall.model';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-shopping-mall',
  templateUrl: './shopping-mall.component.html',
  styleUrl: './shopping-mall.component.scss'
})
export class ShoppingMallComponent {
  shoppingMalls$

  constructor(private readonly productService: ProductService) {
    this.shoppingMalls$ = this.productService.getShoppingMalls()
  }


}
