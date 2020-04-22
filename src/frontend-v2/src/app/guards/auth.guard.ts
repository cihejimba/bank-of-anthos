import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {

    // If user is trying to access the login page
    if (route.routeConfig.path == 'login'){
      if (!this.auth.isAuthenticated()) return true;
      
      this.router.navigate(['']);
      return false;
    }

    // If user is trying to access home page
    if (this.auth.isAuthenticated()) return true;
    
    this.router.navigate(['/login']);
    return false;
  }
}