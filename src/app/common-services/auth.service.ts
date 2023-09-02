import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


/**
 *  GETTER AND SETTER FOR TOKEN 
 */
export class AuthService {
  private authToken: string = '';

  setAuthToken(token: string) {
    this.authToken = token;
  }

  getAuthToken() {
    return this.authToken;
  }
}
