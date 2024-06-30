import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DestructibleComponent} from './common/destructible.component';
import {ModalComponent} from './components';
import {LanguagePipe} from './common/language.pipe';
import {ModalRootComponent} from './components/modal-root/modal-root.component';
import { ModalBackdropComponent } from './components/modal/modal-backdrop/modal-backdrop.component';

@NgModule({
  imports: [CommonModule, LanguagePipe],
  declarations: [
    DestructibleComponent,
    ModalComponent,
    ModalRootComponent,
    ModalBackdropComponent
  ],
  exports: [
    ModalComponent, ModalRootComponent
  ]
})
export class ArtModalModule {
}
