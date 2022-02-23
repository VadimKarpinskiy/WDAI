import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent} from './pages/login/login.component'
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { AdminPanelGuard } from './guard/admin-panel.guard';
import { ManagerGuard } from './guard/manager.guard';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent, canActivate:[ManagerGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: AdminPanelComponent, canActivate:[AdminPanelGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
