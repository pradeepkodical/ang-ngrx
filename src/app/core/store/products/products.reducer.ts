import { createReducer, on } from '@ngrx/store';
import * as AppState from 'src/app/core/store/app.state';
import { ProductsApiActions, ProductsPageActions } from './products.actions';

export interface ProductsState {
  products: Product[];
  currentProductId?: string | null;
  filter: AppState.PaginationFilter;
}

export interface State extends AppState.State {
  products: ProductsState;
}

export interface Product {
  productId: string;
  productName: string;
  billingPrice: number;
  cashPrice: number;

  isSelected?: boolean;
}

const initialState: ProductsState = {
  products: [],
  currentProductId: null,
  filter: {
    pageSize: 0,
    pageNo: 0,
    total: 0,
  },
};

export const productsReducer = createReducer<ProductsState>(
  initialState,

  on(ProductsPageActions.updateFilter, (state, action) => {
    return { ...state, filter: action.filter };
  }),
  on(ProductsPageActions.addNew, (state) => {
    const products = [
      ...state.products,
      {
        productId: `${-state.products.length}`,
        productName: `Product Name ${state.products.length}`,
        billingPrice: 100,
        cashPrice: 80,
      },
    ];
    return { ...state, products };
  }),
  on(ProductsPageActions.selectProduct, (state, action) => ({
    ...state,
    products: state.products.map((x) => ({
      ...x,
      isSelected: action.productId === x.productId,
    })),
    currentProductId: action.productId,
  })),

  /*API Call back*/
  on(ProductsApiActions.loadProductsFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(ProductsApiActions.setProducts, (state, action) => {
    return { ...state, products: action.products };
  }),
  on(ProductsApiActions.saveProduct, (state, action) => {
    return {
      ...state,
      products: state.products.map((p) =>
        p.productId == action.product.productId ? action.product : p
      ),
    };
  }),
  on(ProductsApiActions.saveProductFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
