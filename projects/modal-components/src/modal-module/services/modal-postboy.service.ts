import { Injectable } from '@angular/core';
import { PostboyService } from '@artstesh/postboy';

@Injectable()
export class ModalPostboyService extends PostboyService {
  constructor() {
    super();
  }
}
