import { ComponentFixture } from '@angular/core/testing';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalPostboyService } from '../../../services/modal-postboy.service';
import { ModalSettings } from '../../../models';
import { MockBuilder, MockProvider, MockRender, ngMocks } from 'ng-mocks';

import { anyOfClass, instance, mock, reset, verify } from 'ts-mockito';
import { should } from '@artstesh/it-should';
import { CloseModalCommand } from '../../../messages';
import { Forger } from '@artstesh/forger';

describe('ModalBackdropComponent', () => {
  let fixture: ComponentFixture<ModalBackdropComponent>;
  let postboyService = mock(ModalPostboyService);

  beforeEach(() => {
    return MockBuilder(ModalBackdropComponent).provide(MockProvider(ModalPostboyService, instance(postboyService)));
  });

  beforeEach(() => {
    fixture = MockRender(ModalBackdropComponent);
  });

  afterEach(() => {
    reset(postboyService);
    expect().nothing();
  });

  it('should create', () => {
    should().true(fixture.componentInstance);
  });

  it('should correctly handle new settings', () => {
    const settings = new ModalSettings().setId(fixture.componentInstance._settings().id);
    //
    fixture.componentInstance.settings = settings;
    //
    should().objects(fixture.componentInstance._settings(), settings).equal();
  });

  it('should call postboy fire on closing', () => {
    fixture.componentInstance.close();
    //
    verify(postboyService.fire(anyOfClass(CloseModalCommand))).once();
  });
});
