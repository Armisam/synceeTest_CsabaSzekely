import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {
  currencies: any[] = [];

  displayedColumns: string[] = ['id', 'name', 'min_size'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    const url = 'https://api.coinbase.com/v2/currencies';
    this.http.get<any>(url).subscribe(
      (data) => {
        this.currencies = data.data;
        console.log(this.currencies);
        
      },
      (error) => {
        console.error('Error fetching currencies:', error);
      }
    );
  }
}
