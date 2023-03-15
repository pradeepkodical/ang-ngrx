import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterSelector } from '../router/router.selector';
import { ProductsState } from './products.reducer';

const getProductsFeatureState =
  createFeatureSelector<ProductsState>('products');

const getProducts = createSelector(getProductsFeatureState, (state) => {
  return state.products;
});

const getCurrentProductId = createSelector(
  RouterSelector.getCurrentRoute,
  (state) => {
    return parseInt(state.params['productId']);
  }
);

const getCurrentProduct = createSelector(
  getProductsFeatureState,
  getCurrentProductId,
  (state, currentProductId) => {
    if (currentProductId === 0) {
      return {
        productId: -(state.products.length + 1),
        productName: 'New Product',
        cashPrice: 0,
        billingPrice: 0,
      };
    }
    return state.products.find((x) => x.productId === currentProductId);
  }
);

export const ProductsSelector = {
  getProducts,
  getCurrentProductId,
  getCurrentProduct,
};
