import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/common-services/data.service';

@Component({
  selector: 'app-api-page1',
  templateUrl: './api-page1.page.html',
  styleUrls: ['./api-page1.page.scss'],
})
export class ApiPage1Page implements OnInit {

  //Inizializar esta cosa vacia o da error por no inizializar con un valor
  images: any[] = [];
  page = 1;
  limit = 10;

  constructor(private dataService: DataService,private router: Router) {}

  ngOnInit() {
    this.loadImages();
  }

  loadImages(event?: any) {
    this.dataService.getImages(this.page, this.limit).subscribe((data: any) => {
      this.images = this.images.concat(data);
      this.page++;
      if (event) {
        event.target.complete();
      }
    });
  }

  goToStartMenu() {
    this.router.navigate(['start-menu']);
  }
}
