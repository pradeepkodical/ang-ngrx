import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, finalize, map, mergeMap, of, tap } from 'rxjs';
import { ProductService } from '../../services';
import { UIPageActions } from '../ui/ui.actions';
import { ProductsApiActions, ProductsPageActions } from './products.actions';
import { State } from './products.reducer';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsPageActions.loadProducts),
      tap(() => this.store.dispatch(UIPageActions.showLoading())),
      mergeMap(() =>
        this.productService.getProductsAsync().pipe(
          map((products) => ProductsApiActions.setProducts({ products })),
          catchError((error) =>
            of(ProductsApiActions.loadProductsFailure({ error }))
          ),
          finalize(() => this.store.dispatch(UIPageActions.hideLoading()))
        )
      )
    );
  });

  saveProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsPageActions.saveProduct),
      tap(() => this.store.dispatch(UIPageActions.showLoading())),
      concatMap((action) =>
        this.productService.saveProductAsync(action.product).pipe(
          map((product) => ProductsApiActions.saveProduct({ product })),
          catchError((error) =>
            of(ProductsApiActions.saveProductFailure({ error }))
          ),
          finalize(() => this.store.dispatch(UIPageActions.hideLoading()))
        )
      )
    );
  });
}
