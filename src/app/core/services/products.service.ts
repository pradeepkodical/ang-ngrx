import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';
import { Product } from '../store';
import { PaginationFilter } from '../store/app.state';

@Injectable()
export class ProductService {
  getHeaders() {
    return {
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key':
          '$2b$10$izncwi/qr2GzVB/3fz2qU..mTsbunMr14b6sNMa313ENhDo.6AZSO',
        'X-Access-Key':
          '$2b$10$pqqfQsyH9MXGinT.Y6KSIeRF8nvgw.FbUjt11ilbwXPRmTl055EUO',
      },
    };
  }
  constructor(private http: HttpClient) {}

  getProductsAsync(filter: PaginationFilter) {
    return this.http
      .get<any>(
        'https://api.jsonbin.io/v3/b/64111eeface6f33a22eef403',
        this.getHeaders()
      )
      .pipe(
        map((a) => {
          const products = new Array<Product>();
          for (let i = 0; i < 5; i++) {
            const productId = filter.pageNo * filter.pageSize + i + 1;
            products.push({
              ...a.record.products[0],
              productName: `${a.record.products[0].productName}-${productId}`,
              productId,
            });
          }

          return products;
        })
      );
  }

  saveProductAsync(product: Product) {
    return this.http
      .put<any>(
        'https://api.jsonbin.io/v3/b/64111eeface6f33a22eef403',
        { products: [product] },
        this.getHeaders()
      )
      .pipe(map((a) => product));
  }
}
