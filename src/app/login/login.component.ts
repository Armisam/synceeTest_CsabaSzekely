import { Component, OnInit,} from '@angular/core';
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
  passwordFormControl = new FormControl('', [Validators.required, this.passwordRequirementsValidator()]);

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

  login(){
    if(this.emailFormControl.valid && this.passwordFormControl.valid) {
      this.authService.normalLoginEmail = this.emailFormControl.value;
      this.router.navigate(['/loggedinwithnormal']);
    }
  }

  passwordRequirementsValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password: string = control.value;
      const lowercaseRegex = /[a-z]/;
      const uppercaseRegex = /[A-Z]/;
      const specialCharRegex = /[*/?]/;
  
      const hasLowercase = lowercaseRegex.test(password);
      const hasUppercase = uppercaseRegex.test(password);
      const hasSpecialChar = specialCharRegex.test(password);
  
      const validMinLength = password.length >= 5;
      const validRequirements = hasLowercase && hasUppercase && hasSpecialChar;
  
      if (validMinLength && validRequirements) {
        return null;
      } else if (!validMinLength) {
        return { minLength: true };
      } else {
        return { passwordRequirements: true };
      }
    };
  }
}


export class EmailErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}