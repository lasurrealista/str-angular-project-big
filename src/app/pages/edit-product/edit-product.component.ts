import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
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

  fields: ITableCol[] = this.configService.productsTableColumns.filter(
    column => column.visible
  );
  updating : boolean = false;
  Product$: Observable<Product | undefined> = of(new Product() );
  Product: Product = new Product();


  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.productService.getAll();
    this.activatedRoute.params.subscribe(
      params => this.Product$ = this.productService.get(params.IDorName)
    )
  }


  onFormSubmit(form: NgForm): void{
    this.productService.update(form.value);
    console.log(form.value);

    this.router.navigate(['products']);
  }
/*
 onFormSubmit(form: NgForm): void{
   this.updating = true;
    this.ProductService.update(this.Product).subscribe()
  }
 */
}
