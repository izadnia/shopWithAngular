import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/product';


@Pipe({
  name: 'filterProducts',
  pure: false,
})
export class FilterProductsPipe implements PipeTransform {
  transform(list: Product[], filter: Product): Product[] {
    // if (filter) return list;
    let results = list;
    if (filter.title) {
      results = results.filter((m) => m.title.includes(filter.title));
    }
    if (filter.price) {
      results = results.filter((m) => m.price <= filter.price);
    } if (filter.category){
      results = results.filter((m)=> m.category == filter.category)
    }if (filter.expireDate){
      results = results.filter((m)=> m.expireDate == filter.expireDate)
    }
    
    return results;

  }
}
