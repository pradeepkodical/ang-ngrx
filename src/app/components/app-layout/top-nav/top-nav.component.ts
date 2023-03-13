import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pm-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  @Input('opened') opened: boolean = true;
  @Output('toggle') toggle = new EventEmitter<boolean>();
  doToggle() {
    this.toggle.emit();
  }
}
