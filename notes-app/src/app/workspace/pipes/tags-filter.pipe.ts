import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagsFilter',
  pure: false,
})
export class TagsFilterPipe implements PipeTransform {
  transform(tags: string[], filterTerm: string): string[] {
    if (tags && tags.length > 0 && filterTerm.length) {
      return tags.filter((tag) => tag.toLowerCase().includes(filterTerm.toLowerCase()));
    }

    return tags;
  }
}
