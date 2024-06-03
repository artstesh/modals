import {Component} from '@angular/core';
import {MessageRegistratorService} from "../../services/message-registrator.service";
import {DestructibleComponent} from "../../common/destructible.component";

@Component({
  selector: 'art-modal-root',
  template: '',
  styleUrls: [],
  providers: [MessageRegistratorService]
})
export class ModalRootComponent extends DestructibleComponent{

  constructor(private registrator: MessageRegistratorService) {
    super();
    registrator.up();
  }

  onDestroy = () => this.registrator.down();
}
