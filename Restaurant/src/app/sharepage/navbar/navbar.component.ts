import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { AuthService } from 'src/app/services/auth.service';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showBasket: boolean = false;

  get isLoggedIn(): boolean {
    return this.authService.isUserLogged;
  }

  get userRole(): number {
    return this.authService.loggedUser?.role!;
  }

  get userEmail(): string {
    return this.authService.loggedUser?.email ?? '';
  }

  constructor(private authService: AuthService, private router: Router) { }

  handleLogout(): void {
    this.authService.logout()
      .then(() => {
        this.router.navigateByUrl('/login');
      });
  }

  toggleBasket(): void {
    this.showBasket = !this.showBasket;
  }
}