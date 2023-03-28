import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent implements OnInit {
  sort = 'desc';

  constructor() { }

  ngOnInit(): void {
  }

  onSortedUpdate(newSort: string): void {
    this.sort = newSort;
  }

}
