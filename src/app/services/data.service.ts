import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

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

  getImages(page: number, limit: number): Observable<any> {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
  
    return this.http.get<any[]>(`${this.apiUrl}?_start=${startIndex}&_end=${endIndex}`);
  }
  
}
