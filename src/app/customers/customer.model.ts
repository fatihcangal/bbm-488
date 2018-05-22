import { Ingredient } from '../shared/ingredient.model';

export class Customer {
  public name: string;
  public surName: string;
  public password: string;
  public userName: string;
  public roomNumber: string;
  public floor: string;
  public building: string;
  public ingredients: Ingredient[];

  constructor(name: string,
              surName: string,
              password: string,
              userName: string,
              roomNumber: string,
              floor: string,
              building: string,
              ingredients: Ingredient[]) {
    this.name = name;
    this.surName = surName;
    this.password = password;
    this.userName = userName;
    this.roomNumber = roomNumber;
    this.floor = floor;
    this.building = building;
    this.ingredients = ingredients;
  }
}
