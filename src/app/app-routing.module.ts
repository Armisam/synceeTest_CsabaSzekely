import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GoogleLoggedinComponent } from './google-loggedin/google-loggedin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth-guard';
import { NormalLoggedinComponent } from './normal-loggedin/normal-loggedin.component';
import { ListingPageComponent } from './listing-page/listing-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'loggedinwithnormal', component: NormalLoggedinComponent },
  { path: 'listingpage', component: ListingPageComponent },
  { path: 'loggedinwithgoogle', component: GoogleLoggedinComponent, canActivate: [AuthGuard] },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
