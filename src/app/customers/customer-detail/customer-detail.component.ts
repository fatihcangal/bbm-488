import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  id: number;

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.customer = this.customerService.getCustomer(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.customerService.addIngredientsToShoppingList(this.customer.ingredients);
  }

  onEditCustomer() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteCustomer() {
    this.customerService.deleteCustomer(this.id);
    this.router.navigate(['/products']);
  }

}
