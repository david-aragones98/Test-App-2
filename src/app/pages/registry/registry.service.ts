import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistryService {
  private baseUrl = 'http://localhost:3002/user';

  constructor(private http: HttpClient) {}

  createRegister(body: any): Observable<any> {
    const url = `${this.baseUrl}/register-email`;
    return this.http.post<any>(url, body);
  }

  completeRegister(body: any): Observable<any> {
    const url = `${this.baseUrl}/register-username-password`;
    return this.http.post<any>(url, body);
  }
}