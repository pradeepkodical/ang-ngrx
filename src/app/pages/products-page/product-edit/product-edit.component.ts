import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/store';

@Component({
  selector: 'pm-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent {
  @Input('product') product: Product | null = null;
}
