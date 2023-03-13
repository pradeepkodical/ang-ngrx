import { createAction, props } from '@ngrx/store';

export const toggleActive = createAction('[Home] Toggle active');
export const initializeHome = createAction(
  '[Home] Initialize home',
  props<{ isActive: boolean }>()
);
