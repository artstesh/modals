import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRootComponent } from './modal-root.component';
import { instance, mock, reset, verify, when } from 'ts-mockito';
import { ModalPostboyService } from '../../services/modal-postboy.service';
import { Subject } from 'rxjs';
import { CloseAllModalsCommand, CloseModalCommand, OpenModalCommand } from '../../messages';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';
import { ModalComponent } from '../modal/modal.component';
import { ArtModalModule } from '../../art-modal.module';
import { MessageRegistratorService } from '../../services/message-registrator.service';
import { should } from '@artstesh/it-should';

describe('ModalRootComponent', () => {
  let fixture: ComponentFixture<ModalRootComponent>;
  const registratorService = mock(MessageRegistratorService);

  beforeEach(async () => {
    await MockBuilder(ModalRootComponent, ArtModalModule).mock(MessageRegistratorService, instance(registratorService));
  });

  beforeEach(() => {
    fixture = MockRender(ModalRootComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    reset(registratorService);
    expect().nothing();
  });

  it('should create', () => {
    should().true(fixture.componentInstance);
  });

  it('should fire registrator', () => {
    verify(registratorService.up()).once();
  });
});
