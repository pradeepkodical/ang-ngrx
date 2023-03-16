import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PaginationFilter } from '../app.state';
import { Product } from './products.reducer';

export const ProductsPageActions = createActionGroup({
  source: 'Products Page',
  events: {
    'Add New': emptyProps(),
    'Update Filter': props<{ filter: PaginationFilter }>(),
    'Select Product': props<{ productId: number }>(),
    'Save Product': props<{ product: Product }>(),
  },
});

export const ProductsApiActions = createActionGroup({
  source: 'Products Api',
  events: {
    'Set Products': props<{ products: Array<Product> }>(),
    'Load Products Failure': props<{ error: any }>(),
    'Save Product': props<{ product: Product }>(),
    'Save Product Failure': props<{ error: any }>(),
  },
});
