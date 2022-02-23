import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { map, take, Observable, subscribeOn } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

const USERS_COLLECTION_NAME = 'users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get users$(): Observable<User[]> { 
    return this.db.collection<User>(USERS_COLLECTION_NAME).valueChanges({ idField: '$key' }); 
  }

  constructor(private db: AngularFirestore) { }

  createNewUser(newUser:User) {
    return this.db.collection(USERS_COLLECTION_NAME).add(newUser);
  }
  
  updateUser(user: User, newRole:number){
    this.db.collection(USERS_COLLECTION_NAME).doc(user.$key!).update({role : newRole})
  }

  deleteUser(user: User) {
    this.db.collection(USERS_COLLECTION_NAME).doc(user.$key!).delete();
  }
  
  getUser(uid: string): Observable<User | undefined> {
    return this.users$.pipe(
      take(1),
      map(users => users.find(x => x.uid === uid))
    );
  }
}
