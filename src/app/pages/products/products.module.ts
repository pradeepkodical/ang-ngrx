import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';

import { AppLayoutModule } from 'src/app/components/app-layout/app-layout.module';
import { EffectsModule } from '@ngrx/effects';

import { ProductService } from '../../core/services/products.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { productsReducer, ProductsEffects } from 'src/app/core/store';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FieldsModule } from 'src/app/components/fields/fields.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsListComponent } from './products-page/products-list/products-list.component';
import { ProductEditPageComponent } from './product-edit-page/product-edit-page.component';
import { ProductEditComponent } from './product-edit-page/product-edit/product-edit.component';
import { ProductsRoutingModule } from './products-routing.module';
import { PaginationBarModule } from 'src/app/components/pagination-bar/pagination-bar.module';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductsListComponent,
    ProductEditPageComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FieldsModule,

    FormsModule,
    ReactiveFormsModule,

    AppLayoutModule,

    PaginationBarModule,

    ProductsRoutingModule,
    StoreModule.forFeature('products', productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  exports: [ProductsPageComponent, ProductEditPageComponent],
  providers: [ProductService],
})
export class ProductsModule {}
