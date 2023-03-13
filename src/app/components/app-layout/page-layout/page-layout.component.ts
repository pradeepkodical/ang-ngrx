import { Component } from '@angular/core';

@Component({
  selector: 'pm-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
})
export class PageLayoutComponent {
  opened: boolean = true;

  setOpened(e: boolean) {
    this.opened = e;
  }
}
