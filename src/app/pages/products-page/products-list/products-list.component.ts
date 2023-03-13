import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/store';

@Component({
  selector: 'pm-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input('products') products: Array<Product> = [];
  @Output('doSelect') onSelect = new EventEmitter<Product>();
  doSelect(product: Product) {
    this.onSelect.emit(product);
  }
}
