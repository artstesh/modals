import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ClassNameConstants } from '../../../models/class-name-constants.enum';
import { ModalSettings } from '../../../models';
import { CloseModalCommand } from '../../../messages';
import { ModalPostboyService } from '../../../services/modal-postboy.service';

@Component({
  selector: 'art-modal-backdrop',
  templateUrl: './modal-backdrop.component.html',
  styleUrls: ['./modal-backdrop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalBackdropComponent {
  backdropClass: string = '';
  ClassNameConstants = ClassNameConstants;

  _settings: ModalSettings = new ModalSettings();

  @Input() set settings(value: ModalSettings | undefined) {
    if (!value || this._settings.isSame(value)) return;
    this._settings = value;
    this.backdropClass = this._settings.panelClass?.length ? `${this._settings.panelClass}-backdrop` : '';
    this.detector.detectChanges();
  }

  constructor(private postboy: ModalPostboyService, private detector: ChangeDetectorRef) {}

  close(): void {
    this.postboy.fire(new CloseModalCommand(this._settings.id));
  }
}
