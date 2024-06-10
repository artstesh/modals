import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DestructibleComponent} from './common/destructible.component';
import {ModalComponent} from './components';
import {LanguagePipe} from './common/language.pipe';
import {ModalRootComponent} from './components/modal-root/modal-root.component';

@NgModule({
  imports: [CommonModule, LanguagePipe],
  declarations: [
    DestructibleComponent,
    ModalComponent,
    ModalRootComponent
  ],
  exports: [
    ModalComponent, ModalRootComponent
  ]
})
export class ArtModalModule {
}
