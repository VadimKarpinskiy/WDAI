import { Injectable, OnInit } from "@angular/core";
import { Dish } from "src/app/models/dish.model";

@Injectable({
    providedIn: 'root'
})
export class BasketService{
    private orderedDishes: Dish[] = [];

    setOrderedDishes(dishes:Dish[]) {
        this.orderedDishes = dishes;
    }

    getOrderedDishes(): Dish[] {
        return this.orderedDishes;
    }

    getOrderedDishesCount(dish: Dish): number {
        return this.orderedDishes.filter(x => x.$key === dish.$key).length;
    }

    increaseDishNumber(dish: Dish): void {
        this.orderedDishes.push(dish);
    }

    decreaseDishNumber(dish: Dish): void {
        this.orderedDishes = [...this.orderedDishes.filter((_, i) => i !== this.orderedDishes.indexOf(this.orderedDishes.find(x => x.$key === dish.$key)!))]
    }
}