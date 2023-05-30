import { Component, OnInit , AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit,AfterViewInit {

  constructor(private router: Router) { }

  async ngAfterViewInit() {
    await this.wait(5000);
    console.log('Esperamos 5 secs para simular carga');
    this.router.navigate(['/login']);
  }
  private wait(duration: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }

  ngOnInit() {
    console.log("holita")
    
  }

}
