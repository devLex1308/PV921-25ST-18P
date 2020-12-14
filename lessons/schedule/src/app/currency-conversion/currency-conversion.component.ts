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

  inputValue: number = 0;
  outValue: number = 0;
  inputCurrency: string = '';
  outCurrency: string = '';

  dataArray: CurrencyType[] = [];

  calculateOutValue() {
    const buyArr = this.dataArray.filter(item => item.ccy == this.inputCurrency);
    const saleArr = this.dataArray.filter(item => item.ccy == this.outCurrency);

    const { buy } = buyArr[0];
    const { sale } = saleArr[0];

    this.outValue = this.inputValue * buy / sale;
  }

  changeValue(value: string) {
    this.inputValue = parseFloat(value);
    this.calculateOutValue();
  }

  changeCurrency (ccy: string, operation: string) {
    if (operation == 'buy') {
      this.inputCurrency = ccy;
    }

    if (operation == 'sale') {
      this.outCurrency = ccy;
    }

    this.calculateOutValue();

  }

  ngOnInit(): void {
  	this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').subscribe((data: CurrencyType[]) => {
    	this.dataArray = data.filter(item => item.base_ccy == "UAH");

      const {
        ccy, buy, sale
      } = data[0];
      this.inputCurrency = ccy;
      this.outCurrency = ccy;

    	console.log({data});
    });

  }

}
