import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environment";
import { ShoppingMall } from "../models/shoppingMall.model";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { Favorite } from "../models/favorite.model";
import { Message } from "../models/message.model";

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private readonly http: HttpClient) { }

    getShoppingMalls() {
        return this.http.get<ShoppingMall[]>(`${environment.baseServiceUrl}/product/shopping-mall`);
    }

    getShoppingMallById(id: number) {
        return this.http.get<Product>(`${environment.baseServiceUrl}/product/shopping-mall/${id}`);
    }

    getCategories() {
        return this.http.get<Category[]>(`${environment.baseServiceUrl}/product/category`);
    }

    getCategoryById(id: number) {
        return this.http.get<Product[]>(`${environment.baseServiceUrl}/product/category/${id}`);
    }

    getProducts() {
        return this.http.get<Product[]>(`${environment.baseServiceUrl}/product`);
    }

    getProductById(id: number) {
        return this.http.get<Product[]>(`${environment.baseServiceUrl}/product/${id}`);
    }

    getRecommendeds() {
        return this.http.get<Product[]>(`${environment.baseServiceUrl}/product/recommended`);
    }

    getFavorites() {
        return this.http.get<Favorite[]>(`${environment.baseServiceUrl}/product/favorite`);
    }

    createFavorite(p: Product) {
        return this.http.post<Message>(`${environment.baseServiceUrl}/product/favorite`, {"product_id": p.id, "price": p.price, "quantity": 99});
    }

    deleteFavorite(id: number) {
        return this.http.delete<Message>(`${environment.baseServiceUrl}/product/favorite/${id}`);
    }
}
