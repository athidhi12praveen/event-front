import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(allevent: any[], searchTerm: string, property: string): any[] {
    let result: any = [];
    if (!allevent || searchTerm === '' || property === '') {
      return allevent;
    } else {
      allevent.forEach((item: any) => {
        if (
          item[property]
            .trim()
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase())
        ) {
          result.push(item);
        }
      });
    }
    return result;
  }
}
