import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ): string {

    let minutes = Math.floor(value/60)
    let secondes = value % 60

    return '${minutes} Minutes ${seconds} Secondes';

  }

}
