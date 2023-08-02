import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('AuthGuard canActivate is called');
    return this.authService.isLoggedIn().pipe(map(isLoggedIn => {
      console.log('isLoggedIn value:', isLoggedIn);
      if (!isLoggedIn) {
        console.log('User is not logged in. Redirecting to login page.');
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }));
  }
  
}
