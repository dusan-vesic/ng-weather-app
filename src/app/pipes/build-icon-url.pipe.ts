import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'buildIconUrl' })
export class BuildIconUrl implements PipeTransform {
  transform(value: string): string {
    return `http://openweathermap.org/img/w/${value}.png`;
  }
}
