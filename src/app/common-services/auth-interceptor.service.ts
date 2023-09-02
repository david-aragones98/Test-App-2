import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private _authSrv: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this._authSrv.getAuthToken();
    console.log(' auth-token::', authToken);

    // Clone the request and add the token to the headers
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json', // Set appropriate content type
         Accept: 'application/json', // Specify accepted response type
        'Cache-Control': 'no-cache', // Prevent caching
      },
    });

    // Pass the modified request to the next interceptor or HTTP handler
    return next.handle(authRequest);
  }
}