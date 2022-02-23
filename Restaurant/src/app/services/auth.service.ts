import { Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';

import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get isUserLogged(): boolean {
    return this.currentLoggedUser != null;
  }

  get loggedUser(): User | null {
    return JSON.parse(JSON.stringify(this.currentLoggedUser));
  }

  private currentLoggedUser: User | null = null;

  constructor(
    private auth: AngularFireAuth,
    private usersService: UserService) {
    this.auth.authState.subscribe((res) => {
      if (res?.uid == null) {
        this.currentLoggedUser = null;
      } else {
        this.usersService.getUser(res?.uid)
          .subscribe((user: User | undefined) => {
            this.currentLoggedUser = user!;
          });
      }
    })
  }

  register(email: string, password: string): Promise<any> {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const user: User = {
          uid: res.user!.uid,
          email: email,
          role: 0,
        };

        this.usersService.createNewUser(user);
      })
  }

  login(email: string, password: string): Promise<any> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
    return this.auth.signOut();
  }

  changePersistence(mode: string){
    var session:any
    if(mode === "session"){
       session = firebase.auth.Auth.Persistence.SESSION; 
    }
    else if (mode === "none"){
     session = firebase.auth.Auth.Persistence.NONE; 
    }
    else{
     session = firebase.auth.Auth.Persistence.LOCAL; 
    }
    this.auth.setPersistence(session).then(() => {
     });
  }

}