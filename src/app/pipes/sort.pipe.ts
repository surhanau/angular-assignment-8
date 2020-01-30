import { Pipe, PipeTransform } from '@angular/core';
import { SORT_ORDER } from '../constants/sort-order.constant';

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        if (args.length > 0) {
            if (args[0] === SORT_ORDER.ASC) {
                return value.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
            } else if (args[0] === SORT_ORDER.DESC) {
                return value.sort((a, b) => a.name > b.name ? -1 : a.name < b.name ? 1 : 0);
            }
        }
        return value;
    }

}
