import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from './products.reducer';

export const ProductsPageActions = createActionGroup({
  source: 'Products Page',
  events: {
    'Add New': emptyProps(),
    'Load Products': emptyProps(),
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
