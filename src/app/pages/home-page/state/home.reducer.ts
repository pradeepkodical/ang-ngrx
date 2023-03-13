import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as HomeActions from './home.actions';

export interface HomeState {
  isActive: boolean;
}

const initialState: HomeState = { isActive: false };

const getHomeFeatureState = createFeatureSelector<HomeState>('home');

export const getIsActive = createSelector(
  getHomeFeatureState,
  (state) => state.isActive
);

export const homeReducer = createReducer<HomeState>(
  initialState,
  on(HomeActions.toggleActive, (state) => {
    return { ...state, isActive: !state.isActive };
  }),
  on(HomeActions.initializeHome, (state, action) => {
    return { ...state, isActive: action.isActive };
  })
);
