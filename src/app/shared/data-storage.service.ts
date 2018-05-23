import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { ProductService } from '../products/product.service';
import { Product } from '../products/product.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private productService: ProductService) {}

  storeProducts() {
    return this.http.put('https://ng-recipe-book.firebaseio.com/products.json', this.productService.getProducts());
  }

  getProducts() {
    this.http.get('https://ng-recipe-book.firebaseio.com/products.json')
      .map(
        (response: Response) => {
          const recipes: Product[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Product[]) => {
          this.productService.setProducts(recipes);
        }
      );
  }
}
