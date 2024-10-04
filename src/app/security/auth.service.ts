import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment";
import { Token } from "../shared/models/token.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private notify = new Subject<void>();
    notifyObservable$

    constructor(private http: HttpClient) {
        this.notifyObservable$ = this.notify.asObservable();
    }

    signIn(email: string, password: string) {
        return this.http.post<Token>(`${environment.baseServiceUrl}/sign-in`, { email: email, password: password });
    }

    signUp(email: string, password: string) {
        return this.http.post<Token>(`${environment.baseServiceUrl}/sign-up`, { email: email, password: password });
    }

    signOut() {
        localStorage.removeItem("token")
        this.notify.next();
    }

}
