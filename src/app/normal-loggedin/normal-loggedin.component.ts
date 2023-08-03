import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-normal-loggedin',
  templateUrl: './normal-loggedin.component.html',
  styleUrls: ['./normal-loggedin.component.scss']
})
export class NormalLoggedinComponent implements OnInit{
  email: string | null = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.email = this.authService.normalLoginEmail;
  }

}
