import {LanguagePipe} from './language.pipe';
import {instance, mock} from "ts-mockito";
import {Injector} from "@angular/core";

describe('LanguagePipe', () => {
  it('create an instance', () => {
    const inj = mock(Injector);
    const pipe = new LanguagePipe(instance(inj));
    expect(pipe).toBeTruthy();
  });
});
