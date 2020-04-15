import { Injectable } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  form = new FormGroup({
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''), 
    completed: new FormControl(false)
  });


  createCoffeeOrder(data) {
    // return new Promise<any>((resolve, reject) => {
    //   this.firestore
    //     .collection("coffeeOrders")
    //     .add(data)
    //     .then(res => {}, err => reject(err));
    // });
  }
}
