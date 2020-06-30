import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showFiller = false;

  constructor(private router: Router) {

  }

  transitionToRoute(path: string): void {
    this.router.navigate([`/${path}`]);
  }
}
