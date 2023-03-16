import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  @Output('onChange') onChange = new EventEmitter<PageEvent>();

  @Input('pageNo') pageNo = 0;
  @Input('pageSize') pageSize = 0;
  @Input('total') total = 0;

  doSelect(product: Product) {
    this.onSelect.emit(product);
  }

  doAdd() {
    this.onAdd.emit();
  }

  doChange(e: PageEvent) {
    this.onChange.emit(e);
  }
}
