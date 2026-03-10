import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { ClassNameConstants } from '../../../models/class-name-constants.enum';
import { ModalSettings } from '../../../models';
import { CloseModalCommand } from '../../../messages';
import { ModalPostboyService } from '../../../services/modal-postboy.service';

@Component({
  selector: 'art-modal-backdrop',
  templateUrl: './modal-backdrop.component.html',
  styleUrls: ['./modal-backdrop.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalBackdropComponent {
  backdropClass = signal<string>('');
  ClassNameConstants = ClassNameConstants;

  _settings = signal<ModalSettings>(new ModalSettings());

  @Input() set settings(value: ModalSettings | undefined) {
    if (!value || this._settings().isSame(value)) return;
    this._settings.set(value);
    this.backdropClass.set(this._settings().panelClass?.length ? `${this._settings().panelClass}-backdrop` : '');
  }

  constructor(private postboy: ModalPostboyService) {}

  close(): void {
    this.postboy.fire(new CloseModalCommand(this._settings().id));
  }
}
