import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localized',
  standalone: true,
})
export class LocalizedPipe implements PipeTransform {
  transform(value: any, lang: string = 'ar'): string {
    if (
      value &&
      typeof value === 'object' &&
      (value.hasOwnProperty('ar') || value.hasOwnProperty('en'))
    ) {
      return value[lang] || value['ar'] || 'N/A';
    }

    if (
      value == null ||
      value === '' ||
      (typeof value === 'object' && Object.keys(value).length === 0)
    ) {
      return 'N/A';
    }

    return String(value);
  }
}
