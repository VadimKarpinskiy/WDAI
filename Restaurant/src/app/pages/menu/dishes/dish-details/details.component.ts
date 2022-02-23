import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Dish } from 'src/app/models/dish.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  dish: Dish | undefined = undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Dish,
    private matDialogRef: MatDialogRef<DetailsComponent>) {
    this.dish = data;
  }

  close(): void {
    this.matDialogRef.close();
  }
}
