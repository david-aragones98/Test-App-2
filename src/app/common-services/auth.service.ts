import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

/**
 *  GETTER AND SETTER FOR TOKEN 
 */
export class AuthService {
   constructor( private router: Router) {}

  private authToken: string = '';

  setAuthToken(token: string) {
    this.authToken = token;
  }

  getAuthToken() {
    return this.authToken;
  }



  logout() {
    // Clear the authentication token (or perform any other cleanup)
    this.authToken = '';
    this.router.navigate(['/login']);

    // Optionally, you can also clear user-related data, such as user profile, roles, etc.
    // this.clearUserData();

    // Redirect the user to the login page or perform any other post-logout actions
    // You can use Angular's Router to navigate to the login page
    // Example: 
  }

}
