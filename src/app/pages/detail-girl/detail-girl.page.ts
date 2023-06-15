import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-girl',
  templateUrl: './detail-girl.page.html',
  styleUrls: ['./detail-girl.page.scss'],
})
export class DetailGirlPage {
  image: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.image = navigation.extras.state['image'];
    }
  }

  goToGrid1() {
    this.router.navigate(['grid1']);
  }
}