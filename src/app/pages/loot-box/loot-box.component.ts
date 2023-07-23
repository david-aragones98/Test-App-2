import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loot-box',
  templateUrl: './loot-box.component.html',
  styleUrls: ['./loot-box.component.scss'],
  animations: [
    trigger('abrirCerrarCofre', [
      state('abierto', style({
        transform: 'rotateX(-60deg)',
      })),
      state('cerrado', style({
        transform: 'rotateX(0deg)',
      })),
      transition('abierto => cerrado', animate('500ms ease-out')),
      transition('cerrado => abierto', animate('500ms ease-in')),
    ]),
  ],
})
export class LootBoxComponent  implements OnInit {
  isOpen: boolean = false;
  estadoCofre: 'abierto' | 'cerrado' = 'cerrado';

  toggleCofre() {
    this.estadoCofre = this.estadoCofre === 'abierto' ? 'cerrado' : 'abierto';
  }


  openChest() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit() {}

}
