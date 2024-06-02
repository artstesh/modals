import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DestructibleComponent} from './common/destructible.component';
import {ModalComponent} from './components';
import {MatDialogModule} from "@angular/material/dialog";
import {LanguagePipe} from './common/language.pipe';
import {MatButtonModule} from "@angular/material/button";
import {ModalRootComponent} from './components/modal-root/modal-root.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, LanguagePipe],
  declarations: [
    DestructibleComponent,
    ModalComponent,
    ModalRootComponent
  ],
  exports: [
    ModalComponent, MatDialogModule,ModalRootComponent
  ]
})
export class ArtModalModule {
}
