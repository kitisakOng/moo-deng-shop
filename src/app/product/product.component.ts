import { Component } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { ProductService } from '../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { NgForm } from '@angular/forms';
import { CartService } from '../shared/services/cart.service';
import { ProductOrder } from '../shared/models/product-order.model';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product: Product = <Product>{}
  proId: number = 0
  quantity: number = 0

  constructor(private readonly productService: ProductService, private readonly cartService: CartService, private readonly route: ActivatedRoute, private readonly message: NzMessageService) {

  }

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.productService.getProductById(id).pipe(first()).subscribe(data => {
        this.product = data[0]
      })
    })
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--
    }
  }

  increaseQuantity() {
    this.quantity++
  }

  addToCart(form: NgForm) {
    this.makeFormDirtyAndValidate(form)
    if (form.valid) {
      let productOrder: ProductOrder = <ProductOrder>{ product_id: this.product.id, price: this.product.price, quantity: this.quantity }
      this.cartService.addToCarts([productOrder]).subscribe({
        next: data => {
          this.quantity = 0
          this.message.success(data.message)
        }, error: err => {

        }
      })
    }
  }

  buyNow(form: NgForm) {
    this.makeFormDirtyAndValidate(form)
  }

  makeFormDirtyAndValidate(form: NgForm) {
    form.control.get("quantity")?.markAsDirty()
    form.control.get("quantity")?.updateValueAndValidity()
  }

}
