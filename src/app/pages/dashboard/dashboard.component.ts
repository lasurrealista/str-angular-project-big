import { Component, OnInit } from '@angular/core';
import { InfoCard } from 'src/app/pages/common/info-card/info-card.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: InfoCard[]=[
    {title:'Products', content:'102', cardClass:'card-header-warning', footer:'footer 1', icon:'directions_car', routerLink:'/products'},
    {title:'Customers', content:'321', cardClass:'card-header-success', footer:'footer 2', icon:'person', routerLink:'/customers'},
    {title:'Orders', content:'202', cardClass:'card-header-danger', footer:'footer 3', icon:'shopping_cart', routerLink:'/orders'},
    {title:'Addresses', content:'321', cardClass:'card-header-info', footer:'footer 4', icon:'language', routerLink:'/addresses'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
