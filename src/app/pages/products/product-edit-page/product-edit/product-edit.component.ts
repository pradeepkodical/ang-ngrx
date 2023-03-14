import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/core/store';

@Component({
  selector: 'pm-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnChanges {
  @Input('product') product: Product | null = null;
  @Output('onSaved') onSaved = new EventEmitter<Product>();

  theForm = this.fb.group({
    title: '',
    productName: ['', [Validators.required, Validators.maxLength(100)]],
    billingPrice: 0,
    cashPrice: 0,
  });

  constructor(private fb: FormBuilder) {}

  getControl(name: string): FormControl {
    return this.theForm.get(name) as FormControl;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      this.theForm.patchValue(this.product, { emitEvent: false });
    }
  }

  onSaveChanges() {
    if (this.theForm.valid) {
      if (this.theForm.dirty) {
        const product = {
          ...(this.product ?? { productId: 0 }),
          ...this.theForm.value,
        } as any;
        this.onSaved.emit(product);
      }
    }
  }
}
