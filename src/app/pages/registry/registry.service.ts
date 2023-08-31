import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistryService {
  public REGISTRY_USER_URL= 'http://localhost:3002/user/register-email';

  constructor(private http: HttpClient) {}


  createRegister(body: string): Observable<any> {
        return this.http.post<any>(this.REGISTRY_USER_URL, body);
  }


  
}

