import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/model/order';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { OrderService } from 'src/app/service/order.service';
import { NgForm } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  order$: Observable<Order> = this.activatedRoute.params.pipe(
    switchMap( params => this.orderService.get(params.id) )
  );

  fields: ITableCol[] = this.configService.ordersTableColumns.filter(column => column.visible);
  updating : boolean = false;
  Order$: Observable<Order | undefined> = of(new Order() );

  Order: Order = new Order();


  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.orderService.getAll();
    this.activatedRoute.params.subscribe(
      params => this.Order$ = this.orderService.get(params.id)
    )
  }


  onFormSubmit(form: NgForm): void{
    this.orderService.update(form.value);
    console.log(form.value);

    this.router.navigate(['orders']);
  }

}
