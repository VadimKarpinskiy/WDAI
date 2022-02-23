import { Injectable } from '@angular/core';
import { Dish } from 'src/app/models/dish.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

const DISHES_COLLECTION_NAME = 'dishes';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  get dishes$(): Observable<Dish[]> { 
    return this.db.collection<Dish>(DISHES_COLLECTION_NAME).valueChanges({ idField: '$key' }); 
  }

  constructor(private db: AngularFirestore) { }

  createNewDish(newdish:Dish) {
    return this.db.collection(DISHES_COLLECTION_NAME).add(newdish);
  }

  deleteDish(dish:Dish) {
    this.db.collection(DISHES_COLLECTION_NAME).doc(dish.$key!).delete();
  }
}
