import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string,
  title: string,
  icon?: string,
  order?: number,
  pattern?: string,
  required?: boolean,
  visible?: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiUrl: string = 'http://localhost:3000/';

  productsTableColumns: ITableCol[] = [
    {
      key: 'id',
      title: '#',
      visible: true,
    },
    {
      key: 'name',
      title: 'Name',
      visible: true,
    },
    {
      key: 'type',
      title: 'Type',
      visible: true,
    },
    {
      key: 'catID',
      title: 'Category Id',
      visible: true,
    },
    {
      key: 'description',
      title: 'Description',
      visible: true,
    },
    {
      key: 'price',
      title: 'Price',
      visible: true,
    },
    {
      key: 'featured',
      title: 'Featured',
      visible: true,
    },
    {
      key: 'active',
      title: 'Active',
      visible: true,
    }

  ]

  constructor() {
  }
}