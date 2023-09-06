import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:3002/user';

  constructor(
    private http: HttpClient
  ) { }


 login(body: any) {
  const url = `${this.baseUrl}/login`;
  return this.http.post<any>(url, body);
 }

}
