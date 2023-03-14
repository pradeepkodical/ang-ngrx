import { delay, Observable, of } from 'rxjs';
import { Product } from '../store';

export class ProductService {
  getProductsAsync() {
    return of<Array<Product>>([
      {
        productId: 1123,
        productName: 'Product Name 11',
        billingPrice: 100,
        cashPrice: 80,
      },
    ]).pipe(delay(2000));
  }

  saveProductAsync(product: Product) {
    return of<Product>({ ...product }).pipe(delay(2000));
  }
}
