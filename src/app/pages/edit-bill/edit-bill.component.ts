import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { BillService } from 'src/app/service/bill.service';
import { NgForm } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {

  bill$: Observable<Bill> = this.activatedRoute.params.pipe(
    switchMap( params => this.billService.get(params.id) )
  );

  fields: ITableCol[] = this.configService.billsTableColumns.filter(column => column.visible);
  updating : boolean = false;
  Bill$: Observable<Bill | undefined> = of(new Bill() );

  Bill: Bill = new Bill();


  constructor(
    private billService: BillService,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.billService.getAll();
    this.activatedRoute.params.subscribe(
      params => this.Bill$ = this.billService.get(params.id)
    )
  }


  onFormSubmit(form: NgForm): void{
    this.billService.update(form.value);
    console.log(form.value);

    this.router.navigate(['bills']);
  }
}
