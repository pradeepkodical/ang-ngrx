import { createReducer, on } from '@ngrx/store';
import * as AppState from 'src/app/core/store/app.state';
import { ProductsApiActions, ProductsPageActions } from './products.actions';

export interface ProductsState {
  products: Product[];
  currentProductId?: number | null;
}

export interface State extends AppState.State {
  products: ProductsState;
}

export interface Product {
  productId: number;
  productName: string;
  billingPrice: number;
  cashPrice: number;

  isSelected?: boolean;
}

const initialState: ProductsState = {
  products: [],
  currentProductId: null,
};

export const productsReducer = createReducer<ProductsState>(
  initialState,

  on(ProductsPageActions.addNew, (state) => {
    const products = [
      ...state.products,
      {
        productId: -state.products.length,
        productName: `Product Name ${state.products.length}`,
        billingPrice: 100,
        cashPrice: 80,
      },
    ];
    return { ...state, products };
  }),
  on(ProductsApiActions.loadProductsFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),

  on(ProductsPageActions.selectProduct, (state, action) => ({
    ...state,
    products: state.products.map((x) => ({
      ...x,
      isSelected: action.productId === x.productId,
    })),
    currentProductId: action.productId,
  })),

  on(ProductsApiActions.setProducts, (state, action) => {
    const p = [...state.products];
    action.products.forEach((ap) => {
      if (!p.find((a) => a.productId === ap.productId)) {
        p.push(ap);
      }
    });
    return { ...state, products: p };
  })
);
