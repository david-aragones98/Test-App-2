import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-api-page1',
  templateUrl: './api-page1.page.html',
  styleUrls: ['./api-page1.page.scss'],
})
export class ApiPage1Page implements OnInit {

  //Inizializar esta cosa vacia o da error por no inizializar con un valor
  images: any[] = [];

  constructor(private dataService: DataService,private router: Router) {}

  ngOnInit() {
    this.dataService.getImages().subscribe((data) => {
      this.images = data;
    });
  }

  goToStartMenu() {
    this.router.navigate(['start-menu']);
  }
}
