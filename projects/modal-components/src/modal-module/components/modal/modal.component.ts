import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DestructibleComponent } from '../../common/destructible.component';
import { ModalPostboyService } from '../../services/modal-postboy.service';
import { ModalSettings } from '../../models';
import { CloseAllModalsCommand, OpenModalCommand } from '../../messages';
import { auditTime, filter } from 'rxjs/operators';
import { CloseModalCommand } from '../../messages/commands/close-modal.command';

const DialogPanelClass = 'art-modal-dialog';

@Component({
  selector: 'art-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent extends DestructibleComponent implements OnInit {
  @ViewChild('modal') private modalContent!: TemplateRef<ModalComponent>;
  private modalRef?: MatDialogRef<ModalComponent>;
  command?: OpenModalCommand;

  _settings: ModalSettings = new ModalSettings();

  @Input() set settings(value: ModalSettings | undefined) {
    if (!value || this._settings.isSame(value)) return;
    this._settings = value;
    this.detector.detectChanges();
  }

  constructor(
    private postboy: ModalPostboyService,
    private modalService: MatDialog,
    private detector: ChangeDetectorRef,
  ) {
    super();
  }

  ngOnInit(): void {
    this.subs.push(
      this.postboy
        .subscribe<OpenModalCommand>(OpenModalCommand.ID)
        .pipe(
          filter((cmd) => cmd.modalId === this._settings.id),
          auditTime(100),
        )
        .subscribe((cmd) => this.open(cmd)),
    );
    this.subs.push(
      this.postboy
        .subscribe<CloseModalCommand>(CloseModalCommand.ID)
        .pipe(filter((cmd) => cmd.modalId === this._settings.id))
        .subscribe(() => this.close(false)),
    );
    this.subs.push(
      this.postboy.subscribe<CloseAllModalsCommand>(CloseAllModalsCommand.ID).subscribe(() => this.close(false)),
    );
  }

  open(cmd: OpenModalCommand): void {
    this.close(false);
    this.command = cmd;
    this.modalRef = this.modalService.open(this.modalContent, {
      backdropClass: this._settings.panelClass.length
        ? [`${this._settings.panelClass}-backdrop`, `${DialogPanelClass}-backdrop`]
        : `${DialogPanelClass}-backdrop`,
      panelClass: this._settings.panelClass.length ? [this._settings.panelClass, DialogPanelClass] : DialogPanelClass,
      autoFocus: false,
      position: this._settings.position,
      disableClose: this._settings.disableClose,
      hasBackdrop: this._settings.hasBackdrop,
    });
    this.modalRef.afterClosed().subscribe((res) => {
      this.modalRef = undefined;
      this.close(!!res);
    });
  }

  close(result: boolean): void {
    this.modalRef?.close(result);
    this.command?.finish(result);
    this.command = undefined;
  }

  translate(text: string): string {
    return this._settings.translatePipe?.transform(text) ?? text;
  }
}
