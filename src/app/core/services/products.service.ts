import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Airtable from 'airtable';
import { AirtableBase } from 'airtable/lib/airtable_base';
import { delay, map, Observable, of, tap } from 'rxjs';
import { Product } from '../store';
import { PaginationFilter, PaginationResult } from '../store/app.state';
import { environment } from 'src/environments/environment';

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
  airtable: Airtable;
  constructor(private http: HttpClient) {
    this.airtable = new Airtable({
      apiKey: environment.apiKey,
    });
  }

  getProductsAsync(filter: PaginationFilter) {
    return new Observable<PaginationResult<Product>>((sub) => {
      this.airtable
        .base(environment.base)
        .table(environment.products)
        .select({
          pageSize: filter.pageSize,
          offset: filter.pageNo * filter.pageSize,
        })
        .firstPage()
        .then((data) =>
          setTimeout(() => {
            sub.next({
              offset: '',
              items: data.map((a: any) => ({
                productId: a.id,
                productName: a.fields.ProductName,
                billingPrice: a.fields.BillingPrice,
                cashPrice: a.fields.CashPrice,
              })),
            });
          }, 1000)
        );
    });
  }

  saveProductAsync(product: Product) {
    return new Observable<Product>((sub) => {
      this.airtable
        .base(environment.base)
        .table(environment.products)
        .replace(product.productId, {
          ProductName: product.productName,
          CashPrice: parseFloat(`${product.cashPrice}`),
          BillingPrice: parseFloat(`${product.billingPrice}`),
        })
        .then((data) =>
          sub.next({
            productId: data.id,
            productName: `${data.fields['ProductName']}`,
            billingPrice: parseFloat(`${data.fields['BillingPrice']}`),
            cashPrice: parseFloat(`${data.fields['CashPrice']}`),
          })
        );
    });
  }
}
