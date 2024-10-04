import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Product } from "../models/product.model";
import { ProductService } from "../services/product.service";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RecommendResolver implements Resolve<Product[]> {
    constructor(private readonly service: ProductService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Product[]> | Promise<Product[]> | Product[] {
        return this.service.getRecommendeds();
    }
}