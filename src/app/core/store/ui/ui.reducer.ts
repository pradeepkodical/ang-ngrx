import { createReducer, on } from '@ngrx/store';
import { UIPageActions } from './ui.actions';

export interface UIState {
  loadingCount: number;
}

const initialState: UIState = {
  loadingCount: 0,
};

export const uiReducer = createReducer<UIState>(
  initialState,

  on(UIPageActions.showLoading, (state) => {
    return { loadingCount: state.loadingCount + 1 };
  }),
  on(UIPageActions.hideLoading, (state, action) => {
    return { loadingCount: state.loadingCount - 1 };
  })
);
