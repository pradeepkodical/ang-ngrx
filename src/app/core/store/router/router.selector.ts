import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from './custom-serializer';

const getFeatureState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

const getCurrentRoute = createSelector(getFeatureState, (routerState) => {
  return routerState.state;
});

export const RouterSelector = {
  getCurrentRoute,
};
