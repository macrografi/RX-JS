import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { Product } from './product';
import { ProductService } from './product.service';
import { catchError } from 'rxjs/operators';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;
  products$ = this.productService.productWithCategory$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );
  sub: Subscription;

  constructor(private productService: ProductService) {}

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
