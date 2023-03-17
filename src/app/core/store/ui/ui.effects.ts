import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { State } from '../app.state';
import {
  ProductsApiActions,
  ProductsPageActions,
} from '../products/products.actions';
import { UIPageActions } from './ui.actions';

@Injectable()
export class UIEffects {
  constructor(private actions$: Actions, private store: Store<State>) {}

  showLoading$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ProductsPageActions.updateFilter),
        tap(() => {
          console.log('ShowLoading');
          //this.store.dispatch(UIPageActions.showLoading());
        })
      );
    },
    {
      dispatch: false,
    }
  );

  hideLoading$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          ProductsApiActions.setProducts,
          ProductsApiActions.loadProductsFailure
        ),
        tap(() => {
          console.log('Hiding');
          //this.store.dispatch(UIPageActions.hideLoading());
        })
      );
    },
    {
      dispatch: false,
    }
  );
}
