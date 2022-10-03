import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {Customer} from '../../../model/customer/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = null;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.showCustomers();
  }

  showCustomers() {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers.content;
    });
  }

}
