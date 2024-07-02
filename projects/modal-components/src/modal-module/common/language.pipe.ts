import { Injector, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artLanguagePipe',
  pure: false,
  standalone: true,
})
export class LanguagePipe implements PipeTransform {
  public constructor(private injector: Injector) {}

  transform(value: any, pipe:  PipeTransform | null): any {
    return pipe?.transform(value)??value;
  }
}
