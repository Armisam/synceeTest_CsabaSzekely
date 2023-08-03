import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider'; 
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResgisterComponent } from './resgister/resgister.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { GoogleLoggedinComponent } from './google-loggedin/google-loggedin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './services/auth-service';
import { AuthGuard } from './services/auth-guard';
import { NormalLoggedinComponent } from './normal-loggedin/normal-loggedin.component';
import { ListingPageComponent } from './listing-page/listing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ResgisterComponent,
    ForgotPasswordComponent,
    LoginComponent,
    GoogleLoggedinComponent,
    PageNotFoundComponent,
    NormalLoggedinComponent,
    ListingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('122797729995-2ircnscji02l31rdm10vqu4ei5h740nl.apps.googleusercontent.com') // Kizárólag tesztelés miatt van a kódba égetve!!!
        }
      ]
    } as SocialAuthServiceConfig
  },
  AuthService,
  AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
