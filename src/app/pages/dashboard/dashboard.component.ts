import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { combineLatest, Subscription } from 'rxjs';
import { InfoCard } from 'src/app/pages/common/info-card/info-card.component'
import { BillService } from 'src/app/service/bill.service';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: InfoCard[] = [
    { title: 'Products', content: '102', cardClass: 'card-header-warning', footer: 'footer 1', icon: 'directions_car', routerLink: '/products' },
    { title: 'Customers', content: '321', cardClass: 'card-header-success', footer: 'footer 2', icon: 'person', routerLink: '/customers' },
    { title: 'Orders', content: '202', cardClass: 'card-header-danger', footer: 'footer 3', icon: 'shopping_cart', routerLink: '/orders' },
    { title: 'Bills', content: '321', cardClass: 'card-header-info', footer: 'footer 4', icon: 'receipt', routerLink: '/bills' }
  ]

  combinedSubscription: Subscription = new Subscription();

  orderChartLabels: Label[] = ['new', 'shipped', 'paid'];
  orderChartData: ChartDataSets[] = [
    { data: [0, 0, 0], label: 'Orders' }
  ];

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private billService: BillService,
    private orderService: OrderService
  ) {

  }

  ngOnInit(): void {

    this.combinedSubscription = combineLatest([
      this.productService.list$,
      this.orderService.list$,
      this.customerService.list$,
      this.billService.list$,
      ]).subscribe(
      data => {
        this.cards[0].content = String(data[0].length);
        this.cards[1].content = String(data[2].length);
        this.cards[2].content = String(data[1].length);
        this.cards[3].content = String(data[3].length);

        const newOrders: number =
          data[1].filter(order => order.status === 'new').length;
        const shippedOrders: number =
          data[1].filter(order => order.status === 'shipped').length;
        const paidOrders: number =
          data[1].filter(order => order.status === 'paid').length;
        this.orderChartData[0].data = [newOrders, shippedOrders, paidOrders]
      }
    );

    this.productService.getAll();
    this.customerService.getAll();
    this.orderService.getAll();
    this.billService.getAll();

  }

  ngOnDestroy(): void {
    this.combinedSubscription.unsubscribe();
  }

}
