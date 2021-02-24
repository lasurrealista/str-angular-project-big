import { Component, OnInit } from '@angular/core';
import { InfoCard } from 'src/app/pages/common/info-card/info-card.component'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: InfoCard[]=[
    {title:'Products', content:'102', cardClass:'card-header-warning', footer:'footer 1', icon:'content_copy'},
    {title:'Customers', content:'321', cardClass:'card-header-success', footer:'footer 2', icon:'warning'},
    {title:'Orders', content:'202', cardClass:'card-header-danger', footer:'footer 3', icon:'store'},
    {title:'Addresses', content:'321', cardClass:'card-header-info', footer:'footer 4', icon:'date_range'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
