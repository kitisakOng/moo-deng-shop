import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment";
import { Banner } from "../shared/models/banner.model";

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    constructor(private http: HttpClient) { }

    getBanners() {
        console.log(environment)
        return this.http.get<Banner[]>(`${environment.baseServiceUrl}/product/banner`);
    }

}
