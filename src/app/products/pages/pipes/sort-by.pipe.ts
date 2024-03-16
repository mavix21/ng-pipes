import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Pipe({
  name: 'orderBy',
})
export class SortbyPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy: keyof Hero | null | undefined): Hero[] {
    switch (sortBy) {
      case 'name':
        return heroes.sort((a, b) => a.name.localeCompare(b.name));
      case 'canFly':
        return heroes.sort((a, b) =>
          a.canFly.toString().localeCompare(b.canFly.toString())
        );
      case 'color':
        return heroes.sort((a, b) =>
          a.color.toString().localeCompare(b.color.toString())
        );
      default:
        return heroes;
    }
  }
}
