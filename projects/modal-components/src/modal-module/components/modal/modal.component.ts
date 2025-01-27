import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DestructibleComponent } from '../../common/destructible.component';
import { ModalPostboyService } from '../../services/modal-postboy.service';
import { ModalSettings } from '../../models';
import { CloseAllModalsCommand, OpenModalCommand } from '../../messages';
import { auditTime, filter } from 'rxjs/operators';
import { CloseModalCommand } from '../../messages/commands/close-modal.command';
import { ClassNameConstants } from '../../models/class-name-constants.enum';

@Component({
  selector: 'art-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent extends DestructibleComponent implements OnInit {
  ClassNameConstants = ClassNameConstants;
  panelClass: string = '';
  visible: boolean = false;
  command?: OpenModalCommand;

  _settings: ModalSettings = new ModalSettings();

  @Input() set settings(value: ModalSettings | undefined) {
    if (!value || this._settings.isSame(value)) return;
    this._settings = value;
    this.detector.detectChanges();
  }

  constructor(private postboy: ModalPostboyService, private detector: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.subs.push(
      this.postboy
        .sub(OpenModalCommand)
        .pipe(
          filter((cmd) => cmd.modalId === this._settings.id),
          auditTime(100),
        )
        .subscribe((cmd) => this.open(cmd)),
    );
    this.subs.push(
      this.postboy
        .sub(CloseModalCommand)
        .pipe(filter((cmd) => cmd.modalId === this._settings.id))
        .subscribe((cmd) => this.close(cmd.result)),
    );
    this.subs.push(this.postboy.sub(CloseAllModalsCommand).subscribe(() => this.close(false)));
  }

  open(cmd: OpenModalCommand): void {
    this.close(false);
    this.command = cmd;
    this.visible = true;
    this.panelClass = this._settings.panelClass.length ? `${this._settings.panelClass}` : '';
    this.detector.detectChanges();
  }

  close(result: boolean): void {
    this.command?.finish(result);
    this.command = undefined;
    this.visible = false;
    this.detector.detectChanges();
  }

  translate(text: string): string {
    return this._settings.translatePipe?.transform(text) ?? text;
  }
}
