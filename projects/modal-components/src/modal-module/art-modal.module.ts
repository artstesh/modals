import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DestructibleComponent} from './common/destructible.component';
import {ModalComponent} from './components';
import {MatDialogModule} from "@angular/material/dialog";
import {LanguagePipe} from './common/language.pipe';
import {MatButtonModule} from "@angular/material/button";
import {MessageRegistratorService} from "./services/message-registrator.service";

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, LanguagePipe],
  declarations: [
    DestructibleComponent,
    ModalComponent
  ],
  exports: [
    ModalComponent, MatDialogModule
  ]
})
export class ArtModalModule {
}
