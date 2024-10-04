import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, from, lastValueFrom, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private prefixAuth = 'Bearer';

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handle(req, next));
  }

  async handle(req: HttpRequest<any>, next: HttpHandler) {
    const accessToken = localStorage.getItem("token")
    if (accessToken) {
      const request = req.clone({
        setHeaders: {
          "Authorization": `${this.prefixAuth} ${accessToken}`,
        },
      });

      return lastValueFrom(
        next?.handle(request).pipe(
          catchError((error) => {
            return throwError(() => error);
          })
        )
      );
    }

    return lastValueFrom(
      next?.handle(req).pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      )
    );
  }

}
