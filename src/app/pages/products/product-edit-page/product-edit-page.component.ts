import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  Product,
  ProductsPageActions,
  ProductsSelector,
  State,
} from 'src/app/core/store';

@Component({
  selector: 'pm-product-edit-page',
  templateUrl: './product-edit-page.component.html',
  styleUrls: ['./product-edit-page.component.scss'],
})
export class ProductEditPageComponent {
  product$?: Observable<Product | undefined>;

  constructor(private store: Store<State>, private route: ActivatedRoute) {
    route.params.subscribe((x: any) => {
      this.store.dispatch(
        ProductsPageActions.selectProduct({
          productId: parseInt(`${x.productId}`),
        })
      );
    });
  }

  ngOnInit(): void {
    this.product$ = this.store.select(ProductsSelector.getCurrentProduct);
  }

  doSaveProduct(product: Product) {
    this.store.dispatch(ProductsPageActions.saveProduct({ product }));
  }
}
