import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from './products.reducer';

export const ProductsPageActions = createActionGroup({
  source: 'Products Page',
  events: {
    'Add New': emptyProps(),
    'Load Products': emptyProps(),
    'Select Product': props<{ productId: number }>(),
  },
});

export const ProductsApiActions = createActionGroup({
  source: 'Products Api',
  events: {
    'Set Products': props<{ products: Array<Product> }>(),
    'Load Products Failure': props<{ error: any }>(),
  },
});
