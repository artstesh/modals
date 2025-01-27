import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { MockBuilder, MockProvider, MockRender } from 'ng-mocks';
import { Subject } from 'rxjs';
import { CloseAllModalsCommand, CloseModalCommand, OpenModalCommand } from '../../messages';
import { instance, mock, reset, when } from 'ts-mockito';
import { ModalPostboyService } from '../../services/modal-postboy.service';
import { ArtModalModule } from '../../art-modal.module';

describe('ModalComponent', () => {
  let fixture: ComponentFixture<ModalComponent>;
  const postboy = mock(ModalPostboyService);
  let openCommand$: Subject<OpenModalCommand>;
  let closeCommand$: Subject<CloseModalCommand>;
  let closeAllCommand$: Subject<CloseAllModalsCommand>;

  beforeEach(async () => {
    openCommand$ = new Subject<OpenModalCommand>();
    closeCommand$ = new Subject<CloseModalCommand>();
    closeAllCommand$ = new Subject<CloseAllModalsCommand>();
    when(postboy.sub(OpenModalCommand)).thenReturn(openCommand$);
    when(postboy.sub(CloseModalCommand)).thenReturn(closeCommand$);
    when(postboy.sub(CloseAllModalsCommand)).thenReturn(closeAllCommand$);
    await MockBuilder(ModalComponent, ArtModalModule).provide(MockProvider(ModalPostboyService, instance(postboy)));
  });

  beforeEach(() => {
    fixture = MockRender(ModalComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    reset(postboy);
    expect().nothing();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
