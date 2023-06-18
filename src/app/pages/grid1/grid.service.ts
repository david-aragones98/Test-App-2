import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestGalleryService {

 public TEST_GALLERY_URL = 'http://localhost:3000/image/testgallery';

  constructor(private http: HttpClient) {}


  getTestGallery(page: number ): Observable<any> {
    return this.http.get<any>(this.TEST_GALLERY_URL);
  }

  
}
