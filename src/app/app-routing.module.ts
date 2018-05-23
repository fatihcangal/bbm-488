import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import {CustomerEditComponent} from './customers/customer-edit/customer-edit.component';
import {CustomersComponent} from './customers/customers.component';
import {CustomerDetailComponent} from './customers/customer-detail/customer-detail.component';
import {CustomerStartComponent} from './customers/customer-start/customer-start.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent, children: [
    { path: '', component: ProductStartComponent },
    { path: 'new', component: ProductEditComponent },
    { path: ':id', component: ProductDetailComponent },
    { path: ':id/edit', component: ProductEditComponent },
  ] },
  { path: 'customers', component: CustomersComponent, children: [
      { path: '', component: CustomerStartComponent },
      { path: 'new', component: CustomerEditComponent },
      { path: ':id', component: CustomerDetailComponent },
      { path: ':id/edit', component: CustomerEditComponent },
    ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
