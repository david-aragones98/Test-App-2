import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestGalleryService } from './grid.service';



@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.page.html',
  styleUrls: ['./grid1.page.scss'],
})
export class Grid1Page implements OnInit {
  //Inizializar esta cosa vacia o da error por no inizializar con un valor
  imagesArray: any[] = [];
  page = 1;
  limit = 10;
  isLoading = false;
  hasMoreData = true;

  constructor(
    private _testGallerySrv: TestGalleryService, 
    private router: Router
    
    ) {}

  ngOnInit() {
   // this.loadImages();
   this.getImages();
  }



  public getImages() {
    this._testGallerySrv.getTestGallery(10 ).subscribe(( data: any) => {
     if(data && data.length) {
      this.imagesArray = data;
      console.log('respuesta del servicio', this.imagesArray);
     }
    });
  }

  // loadImages(event?: any) {
  //   if (!this.hasMoreData || this.isLoading) {
  //     return;
  //   }

  //   this.isLoading = true;

  //   this.dataService.getImages(this.page, this.limit).subscribe(
  //     (data) => {
  //       this.imagesArray = this.imagesArray.concat(data);
  //       this.page++;

  //       if (data.length < this.limit) {
  //         // No hay mas datos
  //         this.hasMoreData = false;
  //       }

  //       this.isLoading = false;

  //       if (event) {
  //         event.target.complete();
  //       }
  //     },
  //     (error) => {
  //       console.error(error);
  //       this.isLoading = false;

  //       if (event) {
  //         event.target.complete();
  //       }
  //     }
  //   );
  // }

  onScroll(event: any) {
    // this.getImages(event);
  }

  goToStartMenu() {
    this.router.navigate(['start-menu']);
  }

  //Con esta funcion a veces da error porque salta a la pagina de detalles antes de recoger la info de la imagen en cuestion
  openImageDetail(image: any) {
    this.router.navigate(['/detail-girl'], { state: { image } });
  }
}
