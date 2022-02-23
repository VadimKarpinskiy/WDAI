import { preserveWhitespacesDefault } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnChanges, OnInit, SimpleChanges, SimpleChange } from '@angular/core';
import { Input } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Dish } from 'src/app/models/dish.model';
import { DetailsComponent } from './dish-details/details.component';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit, OnChanges {
  page:number = 1;
  max: number = -1;
  min: number = Number.POSITIVE_INFINITY;

  cost : number | null = 50;

  selectedCategory: string | undefined = undefined;
  selectedCuisine: string | undefined = undefined;
  selectedCostRange: string | undefined = undefined;
  selectedType: string | undefined = undefined;

  emptyParameter(parameter: any): boolean { return parameter == undefined; }

  get categories(): string[] {
    return Array.from(new Set(this.dishes.map(x => x.category)))
  }

  get cuisines(): string[] {
    return Array.from(new Set(this.dishes.map(x => x.cuisine)))
  }

  get types(): string[] {
    return Array.from(new Set(this.dishes.map(x => x.type)))
  }

  filteredDishes: Dish[] = [];

  @Input() dishes: Dish[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges & { [Property in keyof DishesComponent]: SimpleChange }): void {
    if (changes.dishes != null) {
      this.updateFilteredDishes();
    }
  }

  updateFilteredDishes(): void {
    let dishes: Dish[] = [...this.dishes]; 

    
    if (this.selectedCategory != null && this.selectedCategory?.length > 0) {
      dishes = dishes.filter(x => x.category.includes(this.selectedCategory!));
    }

    if (this.selectedCuisine != null && this.selectedCuisine?.length > 0) {
      dishes = dishes.filter(x => x.cuisine.includes(this.selectedCuisine!));
    }

    if (this.selectedType != null && this.selectedType?.length > 0) {
      dishes = dishes.filter(x => x.type.includes(this.selectedType!));
    }

    if (this.selectedCostRange != null && this.selectedCostRange?.length == 1) {
      dishes = dishes.filter(x => x.price <= 7);
    } else if (this.selectedCostRange != null && this.selectedCostRange?.length == 2) {
      dishes = dishes.filter(x => x.price > 7 && x.price <= 15);
    } else if (this.selectedCostRange != null && this.selectedCostRange?.length == 3) {
      dishes = dishes.filter(x => x.price > 15);
    }

    // additional filters

    this.filteredDishes = dishes;
  }

  cleanCategory(): void {
    this.selectedCategory = undefined;
    this.updateFilteredDishes();
  }

  cleanCuisine(): void {
    this.selectedCuisine = undefined;
    this.updateFilteredDishes();
  }

  cleanType(): void {
    this.selectedType = undefined;
    this.updateFilteredDishes();
  }

  cleanCost(): void {
    this.selectedCostRange = undefined;
    this.updateFilteredDishes();
  }

}
