import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './pipe/filter.pipe';
import { SorterPipe } from './pipe/sorter.pipe';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './pages/common/sidebar/sidebar.component';
import { NavbarComponent } from './pages/common/navbar/navbar.component';
import { InfoCardComponent } from './pages/common/info-card/info-card.component';
import { ProductsComponent } from './pages/products/products.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

import { FormsModule } from '@angular/forms';
import { CustomersComponent } from './pages/customers/customers.component';
import { BillsComponent } from './pages/bills/bills.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CategoriesComponent } from './pages/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SorterPipe,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    InfoCardComponent,
    ProductsComponent,
    EditProductComponent,
    CustomersComponent,
    BillsComponent,
    OrdersComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
