import { Injectable } from '@angular/core';
import { ModalPostboyService } from './modal-postboy.service';
import { PostboyAbstractRegistrator } from '@artstesh/postboy';
import { CloseAllModalsCommand, OpenModalCommand } from '../messages';
import { CloseModalCommand } from '../messages/commands/close-modal.command';

@Injectable()
export class MessageRegistratorService extends PostboyAbstractRegistrator {
  constructor(service: ModalPostboyService) {
    super(service);
    this.registerServices([]);
  }

  protected _up(): void {
    this.registerReplay(OpenModalCommand.ID);
    this.registerSubject(CloseModalCommand.ID);
    this.registerSubject(CloseAllModalsCommand.ID);
  }
}
