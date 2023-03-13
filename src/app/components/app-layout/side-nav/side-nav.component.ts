import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'pm-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  links: Array<any> = [
    {
      title: 'Home',
      url: '/home',
    },
    {
      title: 'Products',
      url: '/products',
    },
    {
      title: 'About',
      url: '/about',
    },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.links.forEach((l) => {
          l.isActive = e.url.indexOf(l.url) >= 0;
        });
      }
    });
  }
}
