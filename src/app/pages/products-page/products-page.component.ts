import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  Product,
  State,
  ProductsSelector,
  ProductsPageActions,
} from 'src/app/core/store';

@Component({
  selector: 'pm-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products$?: Observable<Product[]>;
  product$?: Observable<Product | undefined>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.products$ = this.store.select(ProductsSelector.getProducts);
    this.product$ = this.store.select(ProductsSelector.getCurrentProduct);

    this.store.dispatch(ProductsPageActions.loadProducts());
  }

  doAddNew() {
    this.store.dispatch(ProductsPageActions.addNew());
  }

  doSelect(product: Product) {
    this.store.dispatch(
      ProductsPageActions.selectProduct({ productId: product.productId })
    );
  }
}
