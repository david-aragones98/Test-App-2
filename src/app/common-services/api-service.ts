// import { environment } from './../../environments/environment';
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { tap, switchMap } from 'rxjs/operators';
// import { BehaviorSubject, from, Observable, of } from 'rxjs';
// import { Router } from '@angular/router';
// import { Storage } from '@ionic/storage-angular';


// const ACCESS_TOKEN_KEY = 'my-access-token';
// const REFRESH_TOKEN_KEY = 'my-refresh-token';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   // Init with null to filter out the first value in a guard!
//   isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
//   currentAccessToken = null;
//   url = environment.API_URL_MOBILE;

//   constructor(
//     private http: HttpClient, 
//     private router: Router, 
//     private storage: Storage) {
//     this.loadToken();
//   }

//   // Load accessToken on startup
//   async loadToken() {
//     const token = await Storage.get({ key: ACCESS_TOKEN_KEY });
//     if (token && token.value) {
//       this.currentAccessToken = token.value;
//       this.isAuthenticated.next(true);
//     } else {
//       this.isAuthenticated.next(false);
//     }
//   }

//   // Get our secret protected data
// //   getSecretData() {
// //     return this.http.get(`${this.url}/users/secret`);
// //   }

//   // Create new user
// //   signUp(credentials: {username, password}): Observable<any> {
// //     return this.http.post(`${this.url}/users`, credentials);
// //   }

//   // Sign in a user and store access and refres token
// //   login(credentials: {username, password}): Observable<any> {
// //     return this.http.post(`${this.url}/auth`, credentials).pipe(
// //       switchMap((tokens: {accessToken, refreshToken }) => {
// //         this.currentAccessToken = tokens.accessToken;
// //         const storeAccess = Storage.set({key: ACCESS_TOKEN_KEY, value: tokens.accessToken});
// //         const storeRefresh = Storage.set({key: REFRESH_TOKEN_KEY, value: tokens.refreshToken});
// //         return from(Promise.all([storeAccess, storeRefresh]));
// //       }),
// //       tap(_ => {
// //         this.isAuthenticated.next(true);
// //       })
// //     )
// //   }
// }