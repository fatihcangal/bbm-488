import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Customer } from './customer.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class CustomerService {
  recipesChanged = new Subject<Customer[]>();

  private customers: Customer[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(customers: Customer[]) {
    this.customers = customers;
    this.recipesChanged.next(this.customers.slice());
  }

  getCustomers() {
    return this.customers.slice();
  }

  getCustomer(index: number) {
    return this.customers[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
    this.recipesChanged.next(this.customers.slice());
  }

  updateCustomer(index: number, newRecipe: Customer) {
    this.customers[index] = newRecipe;
    this.recipesChanged.next(this.customers.slice());
  }

  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
    this.recipesChanged.next(this.customers.slice());
  }
}
