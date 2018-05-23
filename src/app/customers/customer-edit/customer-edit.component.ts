import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  id: number;
  editMode = false;
  customerForm: FormGroup;
  public routerLinkVariable = '/shopping-list';
  public routerLinkVariable1 = '/products';
  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newRecipe = new Product(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.customerService.updateCustomer(this.id, this.customerForm.value);
    } else {
      this.customerService.addCustomer(this.customerForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.customerForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.customerForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let customerName = '';
    let customerUserName = '';
    let customerSurName = '';
    let customerPassword = '';
    let customerFloor = '';
    let customerRoomNumber = '';
    let customerBuilding = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const customer = this.customerService.getCustomer(this.id);
      customerName = customer.name;
      customerUserName = customer.userName;
      customerSurName = customer.surName;
      customerPassword = customer.password;
      customerFloor = customer.floor;
      customerRoomNumber = customer.roomNumber;
      customerBuilding = customer.building;
      if (customer['ingredients']) {
        for (let ingredient of customer.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.customerForm = new FormGroup({
      'name': new FormControl(customerName, Validators.required),
      'userName': new FormControl(customerUserName, Validators.required),
      'password': new FormControl(customerPassword, Validators.required),
      'surName': new FormControl(customerSurName, Validators.required),
      'floor': new FormControl(customerFloor, Validators.required),
      'building': new FormControl(customerBuilding, Validators.required),
      'roomNumber': new FormControl(customerRoomNumber, Validators.required),
      'ingredients': recipeIngredients
    });
  }

}
