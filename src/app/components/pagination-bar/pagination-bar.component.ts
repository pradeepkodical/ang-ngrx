import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'pm-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.scss'],
})
export class PaginationBarComponent {
  @Input('total') length = 1000;
  @Input('pageSize') pageSize = 10;
  @Input('pageNo') pageIndex = 1;

  @Output('onChange') onChange = new EventEmitter<PageEvent>();

  pageSizeOptions = [5, 10, 20, 50];

  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.onChange.emit(e);
  }
}
