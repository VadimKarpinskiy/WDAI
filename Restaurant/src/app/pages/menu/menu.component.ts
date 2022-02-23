import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes-service.service';
import { Dish } from 'src/app/models/dish.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  dishes$ = this.dishesService.dishes$;

  constructor(private dishesService: DishesService) { } 
}
