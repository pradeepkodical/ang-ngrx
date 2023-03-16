import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  catchError,
  switchMap,
  exhaustMap,
  finalize,
  map,
  mergeMap,
  of,
  tap,
} from 'rxjs';
import { ProductService } from '../../services';
import { UIPageActions } from '../ui/ui.actions';
import { ProductsApiActions, ProductsPageActions } from './products.actions';
import { State } from './products.reducer';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private productService: ProductService,
    private router: Router
  ) {}

  updateFilter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsPageActions.updateFilter),
      tap(() => this.store.dispatch(UIPageActions.showLoading())),
      switchMap((action) =>
        this.productService.getProductsAsync(action.filter).pipe(
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
      exhaustMap((action) =>
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

  productRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ProductsApiActions.saveProduct),
        tap((action) => {
          this.router.navigate(['/products']);
        })
      );
    },
    { dispatch: false }
  );
}
