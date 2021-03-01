import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})

/*
export class SorterPipe implements PipeTransform {

  transform(list: any[] | null, key: string, ascending: true): any [] | null {

    if (!Array.isArray(list) || !key || !ascending) {
      return list;
    }

    return list.sort(
      function(a, b) {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
          if (ascending == true) {
            return a[key] - b[key];
          }
          return b[key] - a[key];
        } else {
            let columnA = ('' + a[key]).toLowerCase();
            let columnB = ('' + b[key]).toLowerCase();

        if (ascending == true) {
            return columnA.localeCompare(columnB);
        }
      return columnB.localeCompare(columnA);
    };
  });
};
};

*/

export class SorterPipe implements PipeTransform {

  transform(list: any[] | null, key: string): any [] | null {

    if (!Array.isArray(list) || !key) {
      return list;
    }

    return list.sort((a, b) =>
    (typeof a[key] === 'number' && typeof b[key] === 'number') ? a[key] - b[key] :
      ('' + a[key]).toLowerCase().localeCompare(('' + b[key]).toLowerCase()))
  }
}

