import { Ingredient } from '../shared/ingredient.model';

export class Product {
  public name: string;
  public amount: string;
  constructor(name: string, amount: string) {
    this.name = name;
    this.amount = amount;
  }
}
