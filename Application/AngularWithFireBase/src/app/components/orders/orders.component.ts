import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  
  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''), 
    completed: new FormControl(false)
  });
  
  coffees = ["Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];

  coffeeOrder = [];

  addCoffee = coffee => this.coffeeOrder.push(coffee);

  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  };

  onSubmit() {
    this.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.form.value;
    console.log(data);

    // this.ordersService.createCoffeeOrder(data).then(res => {
    //   /*do something here....maybe clear the form or give a success message*/
    // });
  }

}
