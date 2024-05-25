import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DestructibleComponent} from './common/destructible.component';
import { ModalComponent } from './components/modal/modal.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [CommonModule, MatDialogModule],
  declarations: [
    DestructibleComponent,
    ModalComponent
  ],
  exports: [
    ModalComponent,MatDialogModule
  ],
})
export class ArtModalModule {}
