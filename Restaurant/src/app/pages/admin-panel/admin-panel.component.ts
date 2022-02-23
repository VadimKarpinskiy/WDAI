import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  userList: User[] = [];

  constructor(public authService: AuthService, public userService: UserService) { }

  ngOnInit(): void {
    this.loadUsersList();
  }

  changePersistence(mode: string){
    this.authService.changePersistence(mode);
    alert("Zmieniono tryb persystencji")
  }

  loadUsersList(): void {
    this.userService.users$.subscribe((users) => {
        this.userList = users;
      })
  }

  removeUser(user: User){
    this.userService.deleteUser(user);
  }

  makeManager(user: User){
    this.userService.updateUser(user, 1)
  }

  makeAdmin(user: User){
    this.userService.updateUser(user, 2)
  }

  makeClient(user: User){
    this.userService.updateUser(user, 0)
  }

}
