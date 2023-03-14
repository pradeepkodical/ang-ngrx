import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UISelector } from 'src/app/core/store';
import { State } from 'src/app/core/store/app.state';

@Component({
  selector: 'pm-global-progress',
  templateUrl: './global-progress.component.html',
  styleUrls: ['./global-progress.component.scss'],
})
export class GlobalProgressComponent implements OnInit {
  title = 'apm-new';
  isLoading$?: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading$ = this.store.select(UISelector.isLoading);
    }, 1000);
  }
}
