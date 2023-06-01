import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

    //Version para limitarlo a las 10 primeras entrys
  getImages() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((data: any[]) => data.slice(0, 10))
    );
  }
  
 /*
  getImages() {
    return this.http.get<any[]>(this.apiUrl);
  }
  */
}
