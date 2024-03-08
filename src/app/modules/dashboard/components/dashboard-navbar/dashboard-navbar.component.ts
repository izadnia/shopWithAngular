import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrl: './dashboard-navbar.component.scss',
})
export class DashboardNavbarComponent {
  fullUrl: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.fullUrl = this.router.url.split('/').splice(2);
      }
    });
  }
}
