import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  cols: ITableCol[] = this.config.productsTableColumns;
  products$: Observable<Product[]> = this.productService.list$;

  constructor(
    private config: ConfigService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getAll();
  }

}
