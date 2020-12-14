import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.css']
})
export class CurrencyConversionComponent implements OnInit {

  constructor(private http: HttpClient){}

  currentCurrency: string = '';

  currentBuy: number = 0;
  currentSale: number = 0;


  ngOnInit(): void {
  	this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').subscribe((data: User) => {
    	this.dataArray = data;

      const {
        ccy, buy, sale
      } = data[0];
      this.currentCurrency = ccy;


      this.currentBuy = buy;
      this.currentSale = sale;
    	console.log({data});
    });

  }

}
