import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationBarComponent } from './pagination-bar.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [PaginationBarComponent],
  imports: [CommonModule, MatPaginatorModule],
  exports: [PaginationBarComponent],
})
export class PaginationBarModule {}
