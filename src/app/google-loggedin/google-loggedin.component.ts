import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-google-loggedin',
  templateUrl: './google-loggedin.component.html',
  styleUrls: ['./google-loggedin.component.scss']
})
export class GoogleLoggedinComponent implements OnInit {

  username!: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getName().subscribe((name) => this.username = name);
  }
}
