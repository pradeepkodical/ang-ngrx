import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

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

import { ProductsApiActions, ProductsPageActions } from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private router: Router
  ) {}

  updateFilter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsPageActions.updateFilter),

      switchMap((action) => {
        return this.productService.getProductsAsync(action.filter).pipe(
          map((products) =>
            ProductsApiActions.setProducts({ products: products.items })
          ),
          catchError((error) =>
            of(ProductsApiActions.loadProductsFailure({ error }))
          )
        );
      })
    );
  });

  saveProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsPageActions.saveProduct),
      exhaustMap((action) =>
        this.productService.saveProductAsync(action.product).pipe(
          map((product) => ProductsApiActions.saveProduct({ product })),
          catchError((error) =>
            of(ProductsApiActions.saveProductFailure({ error }))
          )
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
