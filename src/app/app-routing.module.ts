import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './pages/bills/bills.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditBillComponent } from './pages/edit-bill/edit-bill.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path:"",
    component: DashboardComponent
  },
  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  { path: 'products/:id',
  component:EditProductComponent},
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'products/:id',
    component: EditProductComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'bills',
    component: BillsComponent,
  },
  {
    path: 'bills/:id',
    component: EditBillComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
