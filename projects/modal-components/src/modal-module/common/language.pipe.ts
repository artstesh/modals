import {Injector, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'artLanguage'
})
export class LanguagePipe implements PipeTransform {

  public constructor(private injector: Injector) {
  }

  transform(value: any, pipeToken: any): any {
    if (!pipeToken) {
      return value;
    }
    else {
      let pipe = this.injector.get(pipeToken);
      return pipe.transform(value);
    }
  }
}
