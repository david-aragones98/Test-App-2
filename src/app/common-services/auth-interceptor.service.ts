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


        // Check if the token is expired (you need to implement your own logic for token expiration)
        if (this.isTokenExpired(authToken)) {
          // Trigger a logout action (you need to implement this in your AuthService)
          this._authSrv.logout();
          return next.handle(request); // Return the original request or perform any other action
        }

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



    // Implement your own token expiration logic here
    private isTokenExpired(token: string): boolean {
      // You need to compare the token's expiration date with the current time
      // If the token is expired, return true; otherwise, return false
      // Example: const expirationDate = ...; // Get the expiration date from the token
      //          return expirationDate < new Date();
      return false; // Replace with your actual logic
    }
}