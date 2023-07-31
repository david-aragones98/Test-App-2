import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistryService {
  public REGISTRY_USER_URL= ''

  constructor(private http: HttpClient) {}

/*    //Version para limitarlo a las 10 primeras entrys
  getImages() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data: any[]) => data.slice(0, 10))
    );
  }
  */
 /*
  getImages() {
    return this.http.get<any[]>(this.apiUrl);
  }
  */

  
}

