import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName',
})
export class FormatNamePipe implements PipeTransform {
  transform(value: { firstName: string; lastName: string }): string {
    return `${value.lastName.toUpperCase()} ${value.firstName}`;
  }
}
