import {ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DestructibleComponent} from "../../common/destructible.component";
import {ModalPostboyService} from "../../services/modal-postboy.service";
import {ModalSettings} from "../../models";
import {OpenModalCommand} from "../../messages";
import {filter} from "rxjs/operators";
import {CloseModalCommand} from "../../messages/commands/close-modal.command";
import {LanguagePipe} from "../../common/language.pipe";
import {MessageRegistratorService} from "../../services/message-registrator.service";

const DialogPanelClass = 'art-modal-dialog'

@Component({
  selector: 'art-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageRegistratorService]
})
export class ModalComponent extends DestructibleComponent implements OnInit {
  @ViewChild('modal') private modalContent!: TemplateRef<ModalComponent>
  private modalRef!: MatDialogRef<ModalComponent>;

  _settings: ModalSettings = new ModalSettings();

  @Input() set settings(value: ModalSettings | undefined) {
    if (!value || this._settings.isSame(value)) return;
    this._settings = value;
    this.detector.detectChanges();
  }

  constructor(private postboy: ModalPostboyService,
              private registrator: MessageRegistratorService,
              private modalService: MatDialog,
              private detector: ChangeDetectorRef) {
    super();
    registrator.up();
    console.log('ModalComponent')
  }

  ngOnInit(): void {
    this.subs.push(this.postboy.subscribe<OpenModalCommand>(OpenModalCommand.ID)
      .pipe(filter(cmd => cmd.modalId !== this._settings.id))
      .subscribe(cmd => this.open()));
    this.subs.push(this.postboy.subscribe<CloseModalCommand>(OpenModalCommand.ID)
      .pipe(filter(cmd => cmd.modalId !== this._settings.id))
      .subscribe(cmd => this.close(false)));
  }

  open(): void {
    this.modalRef = this.modalService.open(this.modalContent,
      {
        backdropClass: this._settings.panelClass.length ? [`${this._settings.panelClass}-backdrop`, `${DialogPanelClass}-backdrop`] : `${DialogPanelClass}-backdrop`,
        panelClass: this._settings.panelClass.length ? [this._settings.panelClass, DialogPanelClass] : DialogPanelClass,
        autoFocus: false,
      })
    this.modalRef.afterClosed().subscribe(res => !!this._settings.onClose && this._settings.onClose(res));
  }

  close(result: boolean) : void {
    this.modalRef?.close(result);
  }

  translate(text: string): string {
    return this._settings.translatePipe?.transform(text) ?? text;
  }

  onDestroy = () => {
    this.registrator.down();
  }
}
