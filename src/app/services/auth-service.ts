import { Injectable } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private socialAuthService: SocialAuthService) { }

  normalLoginEmail:string | null = '';

  isLoggedIn(): Observable<boolean> {
    return this.socialAuthService.authState.pipe(map((user) => user !== null));
  }

  getName(): Observable<string> {
    return this.socialAuthService.authState.pipe(map((user) => user.name));
  }
}
