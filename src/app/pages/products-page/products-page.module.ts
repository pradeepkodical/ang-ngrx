import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { ProductsPageComponent } from './products-page.component';
import { AppLayoutModule } from 'src/app/components/app-layout/app-layout.module';
import { EffectsModule } from '@ngrx/effects';

import { ProductService } from '../../core/services/products.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ProductsPageRoutingModule } from './products-page-routing.module';
import { productsReducer, ProductsEffects } from 'src/app/core/store';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductsListComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,

    AppLayoutModule,
    ProductsPageRoutingModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  exports: [ProductsPageComponent],
  providers: [ProductService],
})
export class ProductsPageModule {}
