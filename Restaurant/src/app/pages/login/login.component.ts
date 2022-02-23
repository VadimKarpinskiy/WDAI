import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, take } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    public authService: AuthService,
    private router: Router) { }

  onSignUp(email:string, password:string): void {
    this.authService.register(email, password)
      .then(() => {
        this.router.navigateByUrl('');
      });
  }

  onSignIn(email:string, password:string): void {
    this.authService.login(email, password)
      .then(() => {
        this.router.navigateByUrl('');
      });
  }
}