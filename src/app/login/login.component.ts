import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth-service';
import { AbstractControl, FormControl, FormGroupDirective, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  loginSubscription!: Subscription;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, this.passwordValidator(), this.minPasswordLengthValidator(5)]);

  emailMatcher = new EmailErrorStateMatcher();

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

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password: string = control.value;
      const lowercaseRegex = /[a-z]/;
      const uppercaseRegex = /[A-Z]/;
      const specialCharRegex = /[\/*?]/;
  
      const hasLowercase = lowercaseRegex.test(password);
      const hasUppercase = uppercaseRegex.test(password);
      const hasSpecialChar = specialCharRegex.test(password);
  
      const valid = hasLowercase && hasUppercase && hasSpecialChar;
  
      return valid ? null : { passwordRequirements: true };
    };
  }

  minPasswordLengthValidator(minLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password: string = control.value;
      const isMinLengthValid = password.length >= minLength;
  
      return isMinLengthValid ? null : { minLength: true };
    };
  }
}


export class EmailErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}