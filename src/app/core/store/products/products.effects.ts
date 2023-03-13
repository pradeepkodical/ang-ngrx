import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ProductService } from '../../services';
import { ProductsApiActions, ProductsPageActions } from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsPageActions.loadProducts),
      mergeMap(() =>
        this.productService.getProductsAsync().pipe(
          map((products) => ProductsApiActions.setProducts({ products })),
          catchError((error) =>
            of(ProductsApiActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  });
}
