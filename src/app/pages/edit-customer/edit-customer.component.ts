import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { NgForm } from '@angular/forms';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customer$: Observable<Customer> = this.activatedRoute.params.pipe(
    switchMap( params => this.customerService.get(params.id) )
  );

  fields: ITableCol[] = this.configService.customersTableColumns.filter(column => column.visible);
  updating : boolean = false;
  Customer$: Observable<Customer | undefined> = of(new Customer() );

  Customer: Customer = new Customer();


  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private router: Router,
    private notifyService: NotificationService,

  ) { }

  ngOnInit(): void {
    this.customerService.getAll();
    this.activatedRoute.params.subscribe(
      params => this.Customer$ = this.customerService.get(params.IDorName)
    )
  }

  showHtmlToasterUpdate(){
    this.notifyService.showHTMLMessage(`Updating was successful.`, ``, 3000)
  }

  onUpdate(form: NgForm, customer: Customer): void {

    this.customerService.update(customer).subscribe(
      () => this.router.navigate(['customers'])
    )
}

}
