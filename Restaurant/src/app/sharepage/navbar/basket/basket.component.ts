import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { Dish } from 'src/app/models/dish.model';
import { Router } from '@angular/router';
//import { DishesService } from 'src/app/services/dishes-service.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  get orderedDishes(): Dish[] {
    return this.basketService.getOrderedDishes();
  }

  constructor(private basketService: BasketService, private router: Router) {

  }

  summaryCost(dishes:Dish[]): number {
    let sum: number = 0;
    dishes.forEach(d => sum += d.price);
    return sum;
  }
  ngOnInit(): void {
  }

  submitOrder(): void {
    alert("Zamówienie zostało złożone!");
    this.basketService.setOrderedDishes([]);
    this.router.navigate(['/']);
  }

}
