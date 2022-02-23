import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DishesService } from '../../services/dishes-service.service';
import { Dish } from 'src/app/models/dish.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
   
  name: any;
  cuisine: any;
  type: any;
  category: any;
  ingredients: any;
  maxQuantity: any;
  price: any;
  info: any;
  mainImg: any;
  secondaryImgs: any;

  constructor(private dishesService: DishesService, private router: Router) { }

  addDish() {
    let newDish: Dish = {name: this.name, cuisine: this.cuisine, type: this.type, category: this.category,
    ingredients:this.ingredients, maxQuantity: this.maxQuantity, price:this.price, info:this.info, 
    mainImg:this.mainImg, secondaryImgs:this.secondaryImgs};

    this.dishesService.createNewDish(newDish);
    alert("Danie zostało dodane!");
    this.router.navigate(['menu']);
  }

}
