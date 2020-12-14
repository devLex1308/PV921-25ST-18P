import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


interface CurrencyType {
  ccy: string,
  base_ccy: string,
  buy: number,
  sale:number
}



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

  dataArray: CurrencyType[] = [];

  changeCurrency (ccy: string) {
    const arr = this.dataArray.filter((item => item.ccy == ccy));
    const { buy, sale } = arr[0];
    this.currentBuy = buy;
    this.currentSale = sale;

  }

  ngOnInit(): void {
  	this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').subscribe((data: CurrencyType[]) => {
    	this.dataArray = data.filter(item => item.base_ccy == "UAH");

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
