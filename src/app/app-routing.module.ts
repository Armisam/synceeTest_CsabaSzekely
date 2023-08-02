import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GoogleLoggedinComponent } from './google-loggedin/google-loggedin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth-guard';
import { PasswordLoggedinComponent } from './password-loggedin/password-loggedin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'loggedinwithpassword', component: PasswordLoggedinComponent },
  { path: 'loggedinwithgoogle', component: GoogleLoggedinComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
