import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductOrder } from "../models/product-order.model";
import { Message } from "../models/message.model";
import { environment } from "../../../environment";
import { Product } from "../models/product.model";
import { Cart } from "../models/cart.model";

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor(private readonly http: HttpClient) { }

    getCarts() {
        return this.http.get<Cart[]>(`${environment.baseServiceUrl}/carts`);
    }

    addToCarts(orders: ProductOrder[]) {
        return this.http.post<Message>(`${environment.baseServiceUrl}/cart`, orders);
    }

    orderProducts(orders: ProductOrder[]) {
        return this.http.post<Message>(`${environment.baseServiceUrl}/orders`, orders);
    }
}