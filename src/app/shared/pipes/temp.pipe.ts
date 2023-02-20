import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: number, uniteEntre : string, uniteSortie : string): number {
    if(uniteEntre === 'c'){
      if(uniteSortie === 'k'){
        return value + 273.15
      }
      else{
        return 0;
      }
    }
    else if(uniteEntre === 'k'){
      if(uniteSortie === 'c'){
        return value - 273.15
      }
      else {
        return 0;
      }
    }
    return 0;
  }

}
