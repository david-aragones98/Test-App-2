import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.page.html',
  styleUrls: ['./grid1.page.scss'],
})
export class Grid1Page implements OnInit {

  //Inizializar esta cosa vacia o da error por no inizializar con un valor
  images: any[] = [];
  page = 1;
  limit = 10;
  isLoading = false;
  hasMoreData = true;

  constructor(private dataService: DataService,private router: Router) {}

  ngOnInit() {
    this.loadImages();
  }
  
  loadImages(event?: any) {
    if (!this.hasMoreData || this.isLoading) {
      // No quedan datos para cargar o esta ya cargando
      return;
    }

    this.isLoading = true;

    this.dataService.getImages(this.page, this.limit).subscribe(
      (data) => {
        this.images = this.images.concat(data);
        this.page++;

        if (data.length < this.limit) {
          // No hay mas datos
          this.hasMoreData = false;
        }

        this.isLoading = false;

        if (event) {
          event.target.complete();
        }
      },
      (error) => {
        console.error(error);
        this.isLoading = false;

        if (event) {
          event.target.complete();
        }
      }
    );
  }

  onScroll(event: any) {
    this.loadImages(event);
  }

  goToStartMenu() {
    this.router.navigate(['start-menu']);
  }

}
