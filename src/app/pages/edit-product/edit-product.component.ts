import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';
import { NgForm } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap( params => this.productService.get(params.id) )
  );

  fields: ITableCol[] = this.config.productsTableColumns.filter(
    column => column.visible
  );

  constructor(
    private productService: ProductService,
    private config: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  updating: boolean = false;

  onUpdate(form: NgForm, product: Product): void {
    this.updating = true;

    if (product.id === 0) {
      this.productService.create(product);

    }
    this.productService.update(product).subscribe(
      () => this.router.navigate(['products'])
    );
    }
}
