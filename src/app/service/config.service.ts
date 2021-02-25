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
    },
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'type',
      title: 'Type',
    },
    {
      key: 'catID',
      title: 'Category Id',
    },
    {
      key: 'description',
      title: 'Description',
    },
    {
      key: 'price',
      title: 'Price',
    },
    {
      key: 'featured',
      title: 'Featured',
    },
    {
      key: 'active',
      title: 'Active',
    }

  ]

  constructor() {
  }
}
