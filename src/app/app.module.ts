import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductService } from './products/product.service';
import { DataStorageService } from './shared/data-storage.service';
import {CustomersComponent} from './customers/customers.component';
import {CustomerDetailComponent} from './customers/customer-detail/customer-detail.component';
import {CustomerEditComponent} from './customers/customer-edit/customer-edit.component';
import {CustomerItemComponent} from './customers/customer-list/customer-item/customer-item.component';
import {CustomerListComponent} from './customers/customer-list/customer-list.component';
import {CustomerStartComponent} from './customers/customer-start/customer-start.component';
import {CustomerService} from './customers/customer.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminComponent} from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ProductStartComponent,
    ProductEditComponent,
    CustomersComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CustomerItemComponent,
    CustomerListComponent,
    CustomerStartComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, ProductService, DataStorageService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
