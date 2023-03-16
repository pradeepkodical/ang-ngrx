import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import {
  Product,
  State,
  ProductsSelector,
  ProductsPageActions,
} from 'src/app/core/store';
import { PaginationFilter } from 'src/app/core/store/app.state';

@Component({
  selector: 'pm-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  products$?: Observable<Product[]>;

  productFilter$?: Observable<PaginationFilter>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.products$ = this.store.select(ProductsSelector.getProducts);
    this.productFilter$ = this.store.select(ProductsSelector.getProductFilter);

    this.doChange({
      length: 100,
      pageIndex: 0,
      pageSize: 5,
      previousPageIndex: -1,
    });
  }

  doAddNew() {
    this.store.dispatch(ProductsPageActions.addNew());
  }

  doSelect(product: Product) {
    this.store.dispatch(
      ProductsPageActions.selectProduct({ productId: product.productId })
    );
  }

  doChange(evt: PageEvent) {
    this.store.dispatch(
      ProductsPageActions.updateFilter({
        filter: {
          pageNo: evt.pageIndex,
          total: evt.length,
          pageSize: evt.pageSize,
        },
      })
    );
  }
}
