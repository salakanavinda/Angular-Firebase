import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/entity/customer';
import { CustomerService } from 'src/app/services/Customer/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;
  
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  updateActive(isActive: boolean) {
    this.customerService
      .updateCustomer(this.customer.key, { active: isActive })
      .catch(err => console.log(err));
  }
 
  deleteCustomer() {
    this.customerService
      .deleteCustomer(this.customer.key)
      .catch(err => console.log(err));
  }

}
