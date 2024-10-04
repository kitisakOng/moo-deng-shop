import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment";
import { Token } from "../shared/models/token.model";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) { }

    signIn(email: string, password: string) {
        return this.http.post<Token>(`${environment.baseServiceUrl}/sign-in`, { email: email, password: password });
    }

    signUp(email: string, password: string) {
        return this.http.post<Token>(`${environment.baseServiceUrl}/sign-up`, { email: email, password: password });
    }

}
