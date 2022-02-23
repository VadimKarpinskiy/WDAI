import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Dish } from 'src/app/models/dish.model';

@Component({
  selector: 'app-dish-rate',
  templateUrl: './dish-rate.component.html',
  styleUrls: ['./dish-rate.component.css']
})

export class DishRateComponent {

  dish: Dish;
  public value!: string;
  public remainingText: number | undefined;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Dish,
    private matDialogRef: MatDialogRef<DishRateComponent>) {
      this.dish = data;
  }

  valueChange(value : string) {
    this.remainingText = 500 - value.length;
   }

  sendOpinion(){
    alert("Opinia została wysłana");
  }
}