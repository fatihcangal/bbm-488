import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Customer} from '../customers/customer.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer: Customer;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  loginUser(e) {
    e.preventDefault();
    const userName = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    if (userName == 'admin' && password == 'admin') {
        this.router.navigate(['admin']);
    }
  }

}
