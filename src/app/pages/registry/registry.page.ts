import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
})
export class RegistryPage implements OnInit {

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
