import { NgModule } from "@angular/core";
import { MatCommonModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { DetailsComponent } from "../dish-details/details.component";
import { DishRateComponent } from "../dish-rate/dish-rate.component";
import { DishComponent } from "./dish.component";

@NgModule({
    declarations: [DishComponent, DetailsComponent],
    imports: [MatDialogModule, MatCommonModule],
    entryComponents: [DetailsComponent, DishRateComponent],
    exports: [DishComponent]
})
export class DishModule {
}
