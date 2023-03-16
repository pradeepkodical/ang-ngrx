import { RouterReducerState } from '@ngrx/router-store/src';
import { UIState } from './ui/ui.reducer';

export interface PaginationFilter {
  pageNo: number;
  pageSize: number;
  total: number;
}

export interface State {
  ui: UIState;
  router: RouterReducerState;
}
