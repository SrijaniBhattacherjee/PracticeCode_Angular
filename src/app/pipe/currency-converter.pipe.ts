import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
  standalone: true
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    console.log(args);
    if(args.length > 0 ){
      let [data]=args
      return value*data;
    }else{
      return value * 85;
    }
  }

}
