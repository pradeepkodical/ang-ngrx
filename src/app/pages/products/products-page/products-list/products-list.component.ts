import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/store';

@Component({
  selector: 'pm-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input('products') products: Array<Product> = [];
  @Output('onSelect') onSelect = new EventEmitter<Product>();
  @Output('onAdd') onAdd = new EventEmitter();

  doSelect(product: Product) {
    this.onSelect.emit(product);
  }

  doAdd() {
    this.onAdd.emit();
  }
}
