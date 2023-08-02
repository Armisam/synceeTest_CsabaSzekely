import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  loginSubscription!: Subscription;

  constructor(private authService: AuthService ,private router: Router) {}

  ngOnInit() {
    this.loginSubscription = this.authService.isLoggedIn().subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigate(['/loggedinwithgoogle']);
      }
    });
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }

  @ViewChild('childButton', { static: true }) childButtonRef!: ElementRef<HTMLButtonElement>;

  triggerChildClick() {
    this.childButtonRef.nativeElement.click();
  }
}