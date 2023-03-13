import { of } from 'rxjs';
import { Product } from '../store';

export class ProductService {
  getProductsAsync() {
    return of<Array<Product>>([
      {
        productId: -1,
        productName: 'Product Name 11',
        billingPrice: 100,
        cashPrice: 80,
      },
    ]);
  }
}
