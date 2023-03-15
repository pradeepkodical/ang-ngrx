import { RouterReducerState } from '@ngrx/router-store/src';
import { UIState } from './ui/ui.reducer';

export interface State {
  ui: UIState;
  router: RouterReducerState;
}
