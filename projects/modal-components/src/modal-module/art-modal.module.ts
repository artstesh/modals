import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DestructibleComponent} from './common/destructible.component';
import { ModalComponent } from './components/modal/modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import { LanguagePipe } from './common/language.pipe';

@NgModule({
  imports: [CommonModule, MatDialogModule],
  declarations: [
    DestructibleComponent,
    ModalComponent,
    LanguagePipe
  ],
  exports: [
    ModalComponent,MatDialogModule
  ],
})
export class ArtModalModule {}
