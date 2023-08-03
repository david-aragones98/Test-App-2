import { Component, OnInit } from '@angular/core';
import * as lottie from 'lottie-web';

@Component({
  selector: 'app-loot-box',
  templateUrl: './loot-box.component.html',
  styleUrls: ['./loot-box.component.scss'],
})
export class LootBoxComponent implements OnInit {
  private animation: lottie.AnimationItem | null = null;
  btnChest = {
    // 'background-color': 'red',
    //  'color': '#fff',
    // 'border-radius': '5px',
  }

  constructor() {}

  ngOnInit() {
    const container = document.getElementById('lottie-container');
    if (container) {
      this.animation = lottie.default.loadAnimation({
        container: container,
        path: '../assets/animations/treasure-chest.json', // Reemplaza con la ruta del archivo JSON de la animación
        renderer: 'svg', // Puedes elegir el renderizador (svg, canvas, html). Por defecto, es 'svg'.
        loop: true, // Reproducir en bucle. Por defecto, es true.
        autoplay: false, // Reproducir automáticamente. Por defecto, es true.
      });
    }
  }


  openTreasureChest() {
    this.animation?.play();
  }
  
  closeTreasureChest() {
    this.animation?.stop();
  }


}


