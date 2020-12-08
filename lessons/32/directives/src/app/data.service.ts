import {Injectable} from '@angular/core';
import {LogService} from './log.service';

@Injectable()
export class DataService{

    private data: string[] = [ "Apple iPhone XR", "Samsung Galaxy S9",  "Nokia 9"];

    constructor(private logService: LogService){}

    getData(): string[] {
    	this.logService.write("операция получения данных");
        return this.data;
    }
    addData(name: string){
    	this.logService.write("операция добавления данных");
        this.data.push(name);
    }
    deleteData(index: number){
        this.logService.write("операция удаления данных");
        this.data.splice(index, 1);
    }
}