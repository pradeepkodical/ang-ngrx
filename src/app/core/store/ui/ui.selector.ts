import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UIState } from './ui.reducer';

const getFeatureState = createFeatureSelector<UIState>('ui');

const isLoading = createSelector(getFeatureState, (state) => {
  return state.loadingCount > 0;
});

export const UISelector = {
  isLoading,
};
