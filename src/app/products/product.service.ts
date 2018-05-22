import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Product } from './product.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class ProductService {
  recipesChanged = new Subject<Product[]>();

  private products: Product[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(products: Product[]) {
    this.products = products;
    this.recipesChanged.next(this.products.slice());
  }

  getRecipes() {
    return this.products.slice();
  }

  getRecipe(index: number) {
    return this.products[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(product: Product) {
    this.products.push(product);
    this.recipesChanged.next(this.products.slice());
  }

  updateRecipe(index: number, newRecipe: Product) {
    this.products[index] = newRecipe;
    this.recipesChanged.next(this.products.slice());
  }

  deleteRecipe(index: number) {
    this.products.splice(index, 1);
    this.recipesChanged.next(this.products.slice());
  }
}
