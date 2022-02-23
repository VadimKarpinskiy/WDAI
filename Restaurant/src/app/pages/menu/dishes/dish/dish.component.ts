import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Dish } from 'src/app/models/dish.model';
import { BasketService } from 'src/app/services/basket.service';
import { DishesService } from 'src/app/services/dishes-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../dish-details/details.component';
import { DishRateComponent } from '../dish-rate/dish-rate.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css'],
})
export class DishComponent {

  get orderedCount(): number { return this.basketService.getOrderedDishesCount(<Dish>this.dish); }
  get shouldIncreaseButtonBeDisabled(): boolean { return this.orderedCount >= (this.dish?.maxQuantity ?? 0); }
  get shouldDecreaseButtonBeDisabled(): boolean { return this.orderedCount <= 0; }
  get maxQuantity(): number { return (this.dish?.maxQuantity ?? 0) - this.orderedCount; }

  @Input() dish: Dish | undefined = undefined;

  constructor(
    private modal: MatDialog,
    private basketService: BasketService, 
    private dishesService: DishesService,
    private authService: AuthService,
    private router: Router) {
  }

  increaseDish(): void {
    if (this.authService.isUserLogged) {
      this.basketService.increaseDishNumber(<Dish>this.dish);
    } else {
      this.router.navigate(['login'])
    }
  }

  decreaseDish(): void {
    this.basketService.decreaseDishNumber(<Dish>this.dish);
  }

  getColor(): string {
    if (this.maxQuantity <= 1) {
      return "red";
    } else if (this.maxQuantity  <= 3 && (this.maxQuantity > 1)) {
      return "orange";
    } else {
      return 'unset';
    }
  }

  get userRole(): number {
    return this.authService.loggedUser?.role!;
  }

  deleteDish() {
    this.dishesService.deleteDish(this.dish!);
  }

  showInfo(){
    this.modal.open(DetailsComponent, {
      width: '50vw',
      height: '600px',
      data: this.dish
    });
  }

  rateDish(){
    this.modal.open(DishRateComponent, {
      width: '50vw',
      height: '560px',
      data: this.dish
    });
  }
}


